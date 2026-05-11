import { NextRequest, NextResponse } from "next/server";

/**
 * GitHub OAuth callback for DecapCMS.
 * Exchanges the code for a token and sends it back to the CMS popup
 * via postMessage, which is what DecapCMS expects.
 */
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!code) {
    return errorPage("No authorization code received from GitHub.");
  }
  if (!clientId || !clientSecret) {
    return errorPage("OAuth credentials not configured. Check Vercel environment variables.");
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });

    const data = await tokenRes.json();

    if (data.error || !data.access_token) {
      return errorPage(`GitHub returned an error: ${data.error_description || data.error || "unknown"}`);
    }

    const token = data.access_token;
    const provider = "github";

    // DecapCMS listens for this postMessage format
    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Authenticating…</title></head>
<body>
<p>Authenticated — closing window…</p>
<script>
  (function () {
    function sendMessage(message) {
      window.opener && window.opener.postMessage(message, '*');
    }
    window.addEventListener('message', function (e) {
      if (e.data === 'authorizing:${provider}') {
        sendMessage('authorization:${provider}:success:' + JSON.stringify({ token: '${token}', provider: '${provider}' }));
      }
    }, false);
    sendMessage('authorizing:${provider}');
  })();
</script>
</body>
</html>`;

    return new NextResponse(html, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    return errorPage(`Unexpected error: ${String(err)}`);
  }
}

function errorPage(message: string) {
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Auth Error</title></head>
<body>
<p style="color:red;font-family:sans-serif">Auth error: ${message}</p>
<script>
  window.opener && window.opener.postMessage('authorization:github:error:${encodeURIComponent(message)}', '*');
</script>
</body>
</html>`;
  return new NextResponse(html, {
    status: 400,
    headers: { "Content-Type": "text/html" },
  });
}
