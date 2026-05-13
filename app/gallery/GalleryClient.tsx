"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CTABanner from "../components/CTABanner";

interface BlobItem {
  url: string;
  pathname: string;
}

interface GalleryGroup {
  id: string;
  label: string;
  before?: string;
  after?: string;
  singles: string[];
}

function parseBlobs(blobs: BlobItem[]): GalleryGroup[] {
  const groups: Record<string, GalleryGroup> = {};

  for (const blob of blobs) {
    // Expected pattern: gallery/{groupId}_{type}_{timestamp}.ext
    const filename = blob.pathname.replace("gallery/", "");
    const parts = filename.split("_");
    if (parts.length < 2) continue;

    const groupId = parts[0];
    const type = parts[1]; // "before" | "after" | "single"

    if (!groups[groupId]) {
      groups[groupId] = { id: groupId, label: "", singles: [] };
    }

    if (type === "before") groups[groupId].before = blob.url;
    else if (type === "after") groups[groupId].after = blob.url;
    else groups[groupId].singles.push(blob.url);
  }

  return Object.values(groups).sort((a, b) => b.id.localeCompare(a.id));
}

function BeforeAfterCard({ group }: { group: GalleryGroup }) {
  if (group.before && group.after) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="relative">
            <div
              className="absolute top-2 left-2 z-10 text-xs font-bold text-white px-2 py-1 rounded"
              style={{ backgroundColor: "#555" }}
            >
              BEFORE
            </div>
            <Image
              src={group.before}
              alt="Before"
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="relative">
            <div
              className="absolute top-2 left-2 z-10 text-xs font-bold text-white px-2 py-1 rounded"
              style={{ backgroundColor: "#1B4332" }}
            >
              AFTER
            </div>
            <Image
              src={group.after}
              alt="After"
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
        {group.label && (
          <div className="px-4 py-3 text-sm font-medium text-gray-700">{group.label}</div>
        )}
      </div>
    );
  }

  // Single photos
  return (
    <>
      {group.singles.map((url, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Image
            src={url}
            alt="Project photo"
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
        </div>
      ))}
    </>
  );
}

export default function GalleryClient() {
  const [groups, setGroups] = useState<GalleryGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((data) => {
        setGroups(parseBlobs(data.blobs ?? []));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center text-gray-400 text-lg">Loading gallery…</div>
    );
  }

  if (groups.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-gray-500 text-lg mb-2">Photos coming soon!</p>
        <p className="text-gray-400 text-sm">Check back after our next project.</p>
        <div className="mt-8">
          <CTABanner />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <BeforeAfterCard key={group.id} group={group} />
        ))}
      </div>

      <div className="mt-16">
        <CTABanner />
      </div>
    </div>
  );
}
