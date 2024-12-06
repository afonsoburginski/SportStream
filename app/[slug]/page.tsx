// app/[slug]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import LiveChat from "@/components/layouts/LiveChat";
import VideoPlayer from "@/components/VideoPlayer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSportsData } from "@/contexts/SportsDataContext";
import GameDetails from "@/components/fixtures/GameDetails";

export default function WatchPage() {
  const { slug } = useParams();
  const gameId = parseInt(Array.isArray(slug) ? slug[0] : slug || "", 10);

  const { fixtures, teams, leagues, venues } = useSportsData();

  const game = fixtures.find((fixture) => fixture.id === gameId);

  const teamA = game
    ? teams.find((team) => team.name === game.match.split(" vs ")[0])
    : null;
  const teamB = game
    ? teams.find((team) => team.name === game.match.split(" vs ")[1])
    : null;

  const league = game ? leagues.find((lg) => lg.id === game.leagueId) : null;
  const venue = game ? venues.find((v) => v.id === game.venueId) : null;

  const [message, setMessage] = useState("");

  const handleEmoteSelect = (emote: string) => {
    setMessage((prev) => prev + emote);
  };

  useEffect(() => {
    if (isNaN(gameId) || !game) {
      console.log("Jogo não encontrado para o ID:", gameId);
      return;
    }

    console.log("Dados do Jogo Selecionado:");
    console.log("Fixture:", game);
    console.log("Equipe A:", teamA);
    console.log("Equipe B:", teamB);
    console.log("Liga:", league);
    console.log("Local:", venue);
    console.log("Link de Transmissão:", game?.liveStreamUrl || "Nenhum disponível");
  }, [gameId, game, teamA, teamB, league, venue]);

  if (isNaN(gameId) || !game) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Jogo não encontrado.
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col flex-1 h-full">
        <div className="flex flex-1">
          <div className="flex flex-col flex-1">
            <VideoPlayer
              slug={game.match}
              score={game.score}
              teamA={teamA}
              teamB={teamB}
              liveStreamUrl={game.liveStreamUrl} // Passa o link do stream ao componente
            />
            {teamA && teamB && league && venue && (
              <GameDetails
                fixture={game}
                league={league}
                venue={venue}
                teamA={teamA}
                teamB={teamB}
              />
            )}
          </div>
          <LiveChat
            onEmoteSelect={handleEmoteSelect}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </SidebarProvider>
  );
}
