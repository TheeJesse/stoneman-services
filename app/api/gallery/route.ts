import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "gallery/" });
    return NextResponse.json({ blobs });
  } catch {
    return NextResponse.json({ blobs: [] });
  }
}
