"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

// Resize + compress image to max 1920px / JPEG 85% before upload.
// Keeps phone photos under ~1MB instead of 8–15MB originals.
async function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      const MAX = 1920;
      let { width, height } = img;
      if (width > MAX || height > MAX) {
        if (width >= height) {
          height = Math.round((height * MAX) / width);
          width = MAX;
        } else {
          width = Math.round((width * MAX) / height);
          height = MAX;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(objectUrl);
      canvas.toBlob(
        (blob) => {
          resolve(
            blob
              ? new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" })
              : file
          );
        },
        "image/jpeg",
        0.85
      );
    };
    img.onerror = () => { URL.revokeObjectURL(objectUrl); resolve(file); };
    img.src = objectUrl;
  });
}

const DEFAULT_PW = "";

interface UploadSlot {
  id: string;
  label: string;
  beforeFile?: File;
  afterFile?: File;
  beforePreview?: string;
  afterPreview?: string;
}

function createSlot(): UploadSlot {
  return { id: Date.now().toString() + Math.random().toString(36).slice(2), label: "" };
}

export default function AdminPage() {
  const [password, setPassword] = useState(DEFAULT_PW);
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [slots, setSlots] = useState<UploadSlot[]>([createSlot()]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [results, setResults] = useState<{ label: string; ok: boolean }[]>([]);

  const checkAuth = async () => {
    const res = await fetch("/api/gallery/upload", {
      method: "POST",
      headers: { "x-admin-password": password },
      body: new FormData(), // empty — will 400 but not 401 if pw is right
    });
    if (res.status !== 401) {
      setAuthed(true);
      setAuthError("");
    } else {
      setAuthError("Wrong password. Try again.");
    }
  };

  const setSlotField = (id: string, field: keyof UploadSlot, value: unknown) => {
    setSlots((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleFile = useCallback(
    async (slotId: string, type: "before" | "after", file: File) => {
      // Show preview immediately from original
      const preview = URL.createObjectURL(file);
      if (type === "before") {
        setSlotField(slotId, "beforePreview", preview);
      } else {
        setSlotField(slotId, "afterPreview", preview);
      }
      // Compress in background, then swap in compressed file
      const compressed = await compressImage(file);
      if (type === "before") {
        setSlotField(slotId, "beforeFile", compressed);
      } else {
        setSlotField(slotId, "afterFile", compressed);
      }
    },
    []
  );

  const uploadAll = async () => {
    setUploading(true);
    setResults([]);
    setUploadStatus("");
    const newResults: { label: string; ok: boolean }[] = [];
    const total = slots.reduce((n, s) => n + (s.beforeFile ? 1 : 0) + (s.afterFile ? 1 : 0), 0);
    let done = 0;

    for (const slot of slots) {
      const groupId = slot.id;
      const label = slot.label || "Untitled";
      let ok = true;

      for (const type of ["before", "after"] as const) {
        const file = type === "before" ? slot.beforeFile : slot.afterFile;
        if (!file) continue;

        done++;
        setUploadStatus(`Uploading photo ${done} of ${total}…`);

        const fd = new FormData();
        fd.append("file", file);
        fd.append("label", label);
        fd.append("type", type);
        fd.append("groupId", groupId);

        try {
          const res = await fetch("/api/gallery/upload", {
            method: "POST",
            headers: { "x-admin-password": password },
            body: fd,
          });
          if (!res.ok) ok = false;
        } catch {
          ok = false;
        }
      }

      newResults.push({ label, ok });
    }

    setUploadStatus("");
    setResults(newResults);
    setUploading(false);

    if (newResults.every((r) => r.ok)) {
      setSlots([createSlot()]);
    }
  };

  if (!authed) {
    return (
      <div
        style={{ backgroundColor: "#FAF7F2" }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-1" style={{ color: "#1B4332" }}>
            Gallery Admin
          </h1>
          <p className="text-gray-500 text-sm mb-6">Enter your admin password to continue.</p>
          <input
            type="password"
            className="w-full border rounded-lg px-4 py-3 mb-3 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: "#d1c9be" }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkAuth()}
          />
          {authError && <p className="text-red-500 text-sm mb-3">{authError}</p>}
          <button
            onClick={checkAuth}
            className="w-full py-3 rounded-full font-bold text-white"
            style={{ backgroundColor: "#1B4332" }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-1" style={{ color: "#1B4332" }}>
          Upload Photos
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Upload before &amp; after pairs (or single photos). They&apos;ll appear on the public gallery page immediately.
        </p>

        <div className="flex flex-col gap-6">
          {slots.map((slot, idx) => (
            <div key={slot.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-700">Photo #{idx + 1}</span>
                {slots.length > 1 && (
                  <button
                    onClick={() => setSlots((prev) => prev.filter((s) => s.id !== slot.id))}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                type="text"
                placeholder="Label (e.g. Cedar Fence — Brentwood)"
                className="w-full border rounded-lg px-4 py-2 text-sm mb-5 focus:outline-none focus:ring-2"
                style={{ borderColor: "#d1c9be" }}
                value={slot.label}
                onChange={(e) => setSlotField(slot.id, "label", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-4">
                {(["before", "after"] as const).map((type) => {
                  const preview = type === "before" ? slot.beforePreview : slot.afterPreview;
                  return (
                    <label
                      key={type}
                      className="cursor-pointer border-2 border-dashed rounded-xl flex flex-col items-center justify-center h-44 relative overflow-hidden"
                      style={{ borderColor: preview ? "#1B4332" : "#d1c9be", backgroundColor: preview ? "#f0faf4" : "#faf7f2" }}
                    >
                      {preview ? (
                        <Image src={preview} alt={type} fill className="object-cover rounded-xl" />
                      ) : (
                        <div className="text-center p-4">
                          <div className="text-3xl mb-2">{type === "before" ? "📷" : "✨"}</div>
                          <div className="text-sm font-semibold capitalize" style={{ color: "#8B5E3C" }}>
                            {type} Photo
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Click to upload</div>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFile(slot.id, type, f);
                        }}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setSlots((prev) => [...prev, createSlot()])}
            className="px-5 py-3 rounded-full font-semibold border-2 text-sm"
            style={{ borderColor: "#1B4332", color: "#1B4332" }}
          >
            + Add Another Photo
          </button>
          <button
            onClick={uploadAll}
            disabled={uploading}
            className="px-6 py-3 rounded-full font-bold text-white text-sm disabled:opacity-50"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            {uploading ? uploadStatus || "Uploading…" : "Upload All"}
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-6 bg-white rounded-xl p-5 border border-gray-100">
            <h2 className="font-bold mb-3 text-green-800">Upload Results</h2>
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-sm mb-1">
                <span>{r.ok ? "✅" : "❌"}</span>
                <span className="text-gray-700">{r.label}</span>
              </div>
            ))}
            {results.every((r) => r.ok) && (
              <a
                href="/gallery"
                className="inline-block mt-3 text-sm font-semibold underline"
                style={{ color: "#1B4332" }}
              >
                View Gallery →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
