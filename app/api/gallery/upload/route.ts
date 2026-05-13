import { put, del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "stoneman2024";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("x-admin-password");
  if (authHeader !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const label = (formData.get("label") as string) || "";
  const type = (formData.get("type") as string) || "single"; // "before" | "after" | "single"
  const groupId = (formData.get("groupId") as string) || Date.now().toString();

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const ext = file.name.split(".").pop();
  const filename = `gallery/${groupId}_${type}_${Date.now()}.${ext}`;

  const blob = await put(filename, file, {
    access: "public",
    contentType: file.type,
    addRandomSuffix: false,
  });

  return NextResponse.json({
    url: blob.url,
    label,
    type,
    groupId,
  });
}

export async function DELETE(request: NextRequest) {
  const authHeader = request.headers.get("x-admin-password");
  if (authHeader !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { url } = await request.json();
  if (!url) return NextResponse.json({ error: "No URL provided" }, { status: 400 });

  await del(url);
  return NextResponse.json({ success: true });
}
