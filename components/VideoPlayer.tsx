// components/VideoPlayer.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface VideoPlayerProps {
  slug: string;
}

export default function VideoPlayer({ slug }: VideoPlayerProps) {
  const [showTitle, setShowTitle] = useState(true);
  const videoId = "";
  // QnM2ObEbkFA

  return (
    <Card
      className="relative flex flex-1 h-[150vh] max-h-full overflow-hidden bg-background rounded-none pr-16 top-12"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={() => setShowTitle(true)}
    >
      {showTitle && (
        <div className="absolute top-12 left-4 z-10 bg-black/50 px-4 py-2 rounded-lg">
          <h1 className="text-xl font-bold text-white">Assistindo {slug}</h1>
        </div>
      )}
      <CardContent className="flex flex-1 items-center justify-center p-0">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
          title={`Assistindo ${slug}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
}
