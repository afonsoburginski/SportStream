// app/[slug]/page.tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import LiveChat from "@/components/layouts/LiveChat";
import VideoPlayer from "@/components/VideoPlayer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSportsData } from "@/contexts/SportsDataContext";

export default function WatchPage() {
  const { slug } = useParams();
  const gameId = parseInt(Array.isArray(slug) ? slug[0] : slug || "", 10);

  const { fixtures, teams } = useSportsData();

  const game = fixtures.find((fixture) => fixture.id === gameId);

  const teamA = game
    ? teams.find((team) => team.name === game.match.split(" vs ")[0])
    : null;
  const teamB = game
    ? teams.find((team) => team.name === game.match.split(" vs ")[1])
    : null;

  const [message, setMessage] = useState("");

  const handleEmoteSelect = (emote: string) => {
    setMessage((prev) => prev + emote);
  };

  if (isNaN(gameId) || !game) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Game not found.
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex flex-1 h-full">
        <div className="flex flex-1">
          <VideoPlayer slug={game.match} score={game.score} teamA={teamA} teamB={teamB} />
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
