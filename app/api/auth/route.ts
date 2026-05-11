import { NextRequest, NextResponse } from "next/server";

/**
 * GitHub OAuth proxy for DecapCMS.
 * DecapCMS opens this in a popup to start the GitHub login flow.
 *
 * Required environment variables (set in Vercel dashboard):
 *   GITHUB_CLIENT_ID      — from your GitHub OAuth App
 *   GITHUB_CLIENT_SECRET  — from your GitHub OAuth App
 *   NEXT_PUBLIC_SITE_URL  — e.g. https://stonemanservicestn.com
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

  if (!clientId) {
    return new NextResponse(
      "<p>Error: GITHUB_CLIENT_ID environment variable is not set. See Vercel project settings.</p>",
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }

  const redirectUri = `${siteUrl}/api/auth/callback`;
  const scope = "repo,user";
  const state = Math.random().toString(36).substring(2);

  const githubUrl = new URL("https://github.com/login/oauth/authorize");
  githubUrl.searchParams.set("client_id", clientId);
  githubUrl.searchParams.set("redirect_uri", redirectUri);
  githubUrl.searchParams.set("scope", scope);
  githubUrl.searchParams.set("state", state);

  return NextResponse.redirect(githubUrl.toString());
}
