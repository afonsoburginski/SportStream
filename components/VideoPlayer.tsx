// components/VideoPlayer.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player"; // Importando o React Player

interface VideoPlayerProps {
  slug: string;
  score?: string;
  teamA?: {
    name: string;
    logoUrl: string;
  };
  teamB?: {
    name: string;
    logoUrl: string;
  };
  liveStreamUrl?: string; // Link do stream ao vivo
}

export default function VideoPlayer({ slug, score, teamA, teamB, liveStreamUrl }: VideoPlayerProps) {
  const [showTitle, setShowTitle] = useState(true);

  return (
    <Card
      className="relative flex flex-1 h-[80vh] max-h-full overflow-hidden bg-background rounded-none pr-16 top-12"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={() => setShowTitle(true)}
    >
      {showTitle && (
        <div className="absolute top-12 left-4 z-10 bg-black/70 px-3 py-1 rounded-lg flex items-center gap-3">
          {teamA && (
            <div className="flex flex-col items-center">
              <Image
                src={teamA.logoUrl}
                alt={teamA.name}
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-xs text-white mt-1">{teamA.name}</span>
            </div>
          )}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300">{slug}</span>
            <span className="text-lg font-bold text-white">{score || "VS"}</span>
          </div>
          {teamB && (
            <div className="flex flex-col items-center">
              <Image
                src={teamB.logoUrl}
                alt={teamB.name}
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-xs text-white mt-1">{teamB.name}</span>
            </div>
          )}
        </div>
      )}
      <CardContent className="flex flex-1 items-center justify-center p-0">
        {liveStreamUrl ? (
          <ReactPlayer
            url={liveStreamUrl}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-center text-gray-500">
            Nenhuma transmissão ao vivo disponível para este jogo.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
