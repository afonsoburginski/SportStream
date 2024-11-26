// pages/[slug]/page.tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import LiveChat from "@/components/layouts/LiveChat";
import VideoPlayer from "@/components/VideoPlayer";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function WatchPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  if (!slug) {
    throw new Error("Slug is required and must be a string.");
  }

  const [message, setMessage] = useState("");

  const handleEmoteSelect = (emote: string) => {
    setMessage((prev) => prev + emote);
  };

  return (
    <SidebarProvider>
      <div className="flex flex-1 h-full">
        <div className="flex flex-1 ">
          <VideoPlayer slug={slug} />
        </div>
        <LiveChat
          onEmoteSelect={handleEmoteSelect}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </SidebarProvider>
  );
}
