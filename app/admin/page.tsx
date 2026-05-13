"use client";

import { useState } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";

interface UploadSlot {
  id: string;
  label: string;
  beforeFile?: File;
  afterFile?: File;
  beforePreview?: string;
  afterPreview?: string;
}

function createSlot(): UploadSlot {
  return {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    label: "",
  };
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [slots, setSlots] = useState<UploadSlot[]>([createSlot()]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [results, setResults] = useState<{ label: string; ok: boolean; error?: string }[]>([]);

  const login = () => {
    if (!password.trim()) {
      setAuthError("Enter the password.");
      return;
    }
    setAuthed(true);
    setAuthError("");
  };

  const setSlotField = (id: string, field: keyof UploadSlot, value: unknown) => {
    setSlots((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const handleFileSelect = (slotId: string, type: "before" | "after", file: File) => {
    const preview = URL.createObjectURL(file);
    setSlotField(slotId, type === "before" ? "beforeFile" : "afterFile", file);
    setSlotField(slotId, type === "before" ? "beforePreview" : "afterPreview", preview);
  };

  const uploadAll = async () => {
    const filesToUpload: { slotId: string; label: string; file: File; type: string; groupId: string }[] = [];

    for (const slot of slots) {
      if (slot.beforeFile) {
        filesToUpload.push({ slotId: slot.id, label: slot.label || "Untitled", file: slot.beforeFile, type: "before", groupId: slot.id });
      }
      if (slot.afterFile) {
        filesToUpload.push({ slotId: slot.id, label: slot.label || "Untitled", file: slot.afterFile, type: "after", groupId: slot.id });
      }
    }

    if (filesToUpload.length === 0) {
      setUploadStatus("No photos selected.");
      return;
    }

    setUploading(true);
    setResults([]);
    const newResults: { label: string; ok: boolean; error?: string }[] = [];

    for (let i = 0; i < filesToUpload.length; i++) {
      const { label, file, type, groupId } = filesToUpload[i];
      setUploadStatus(`Uploading ${i + 1} of ${filesToUpload.length}…`);

      // Pathname format: gallery/{groupId}_{type}_{timestamp}.jpg
      // This is how GalleryClient.tsx parses which is before/after
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const pathname = `gallery/${groupId}_${type}_${Date.now()}.${ext}`;

      try {
        await upload(pathname, file, {
          access: "public",
          handleUploadUrl: "/api/gallery/upload",
          clientPayload: password,
        });
        newResults.push({ label, ok: true });
      } catch (err) {
        const msg = (err as Error)?.message || "Unknown error";
        if (msg.toLowerCase().includes("unauthorized")) {
          setAuthError("Wrong password — please log in again.");
          setAuthed(false);
          setUploading(false);
          setUploadStatus("");
          return;
        }
        newResults.push({ label, ok: false, error: msg });
      }
    }

    setUploadStatus("");
    setResults(newResults);
    setUploading(false);

    if (newResults.every((r) => r.ok)) {
      setSlots([createSlot()]);
    }
  };

  // ─── Login screen ───────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-1" style={{ color: "#1B4332" }}>Gallery Admin</h1>
          <p className="text-gray-500 text-sm mb-6">Enter your admin password to upload photos.</p>
          <input
            type="password"
            className="w-full border rounded-lg px-4 py-3 mb-3 text-sm"
            style={{ borderColor: "#d1c9be" }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            autoFocus
          />
          {authError && <p className="text-red-500 text-sm mb-3">{authError}</p>}
          <button
            onClick={login}
            className="w-full py-3 rounded-full font-bold text-white"
            style={{ backgroundColor: "#1B4332" }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ─── Upload screen ───────────────────────────────────────────────────────────
  return (
    <div style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-1" style={{ color: "#1B4332" }}>Upload Photos</h1>
        <p className="text-gray-500 text-sm mb-8">
          Add a Before and/or After photo for each project. They go live on the gallery instantly.
        </p>

        <div className="flex flex-col gap-6">
          {slots.map((slot, idx) => (
            <div key={slot.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-700">Project #{idx + 1}</span>
                {slots.length > 1 && (
                  <button
                    onClick={() => setSlots((p) => p.filter((s) => s.id !== slot.id))}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                type="text"
                placeholder="Optional label (e.g. Cedar fence – Brentwood)"
                className="w-full border rounded-lg px-4 py-2 text-sm mb-5"
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
                      style={{
                        borderColor: preview ? "#1B4332" : "#d1c9be",
                        backgroundColor: preview ? "#f0faf4" : "#faf7f2",
                      }}
                    >
                      {preview ? (
                        <Image src={preview} alt={type} fill className="object-cover rounded-xl" />
                      ) : (
                        <div className="text-center p-4">
                          <div className="text-3xl mb-2">{type === "before" ? "📷" : "✨"}</div>
                          <div className="text-sm font-semibold capitalize" style={{ color: "#8B5E3C" }}>
                            {type} Photo
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Tap to choose</div>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFileSelect(slot.id, type, f);
                        }}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <button
            onClick={() => setSlots((p) => [...p, createSlot()])}
            disabled={uploading}
            className="px-5 py-3 rounded-full font-semibold border-2 text-sm disabled:opacity-40"
            style={{ borderColor: "#1B4332", color: "#1B4332" }}
          >
            + Add Another Project
          </button>
          <button
            onClick={uploadAll}
            disabled={uploading}
            className="px-6 py-3 rounded-full font-bold text-white text-sm disabled:opacity-50 min-w-[140px]"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            {uploading ? (uploadStatus || "Uploading…") : "Upload All"}
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-6 bg-white rounded-xl p-5 border border-gray-100">
            <h2 className="font-bold mb-3" style={{ color: "#1B4332" }}>Results</h2>
            {results.map((r, i) => (
              <div key={i} className="flex items-start gap-2 text-sm mb-1">
                <span>{r.ok ? "✅" : "❌"}</span>
                <span className="text-gray-700">{r.label}{r.error ? ` — ${r.error}` : ""}</span>
              </div>
            ))}
            {results.every((r) => r.ok) && (
              <a
                href="/gallery"
                className="inline-block mt-4 text-sm font-semibold underline"
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
