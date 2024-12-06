"use client";

import React from "react";
import { Fixture, League, Venue, Team } from "@/types"; // Ajuste o caminho conforme necessário

interface GameDetailsProps {
  fixture: Fixture;
  league: League;
  venue: Venue;
  teamA: Team;
  teamB: Team;
}

const GameDetails: React.FC<GameDetailsProps> = ({ fixture, league, venue, teamA, teamB }) => {
  const getStatusLabel = (status: string, time: string) => {
    switch (status) {
      case "1H":
        return `Primeiro Tempo - ${time}`;
      case "2H":
        return `Segundo Tempo - ${time}`;
      case "HT":
        return "Intervalo";
      case "FT":
        return "Finalizado";
      case "NS":
        return new Date(fixture.date || "").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        });
      default:
        return "Indefinido";
    }
  };

  return (
    <div className="mt-4 bg-muted/95 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Detalhes do Jogo</h2>
      <div className="flex items-center mb-4">
        <img src={teamA.logoUrl} alt={teamA.name} className="w-12 h-12 mr-4" />
        <span className="font-semibold text-lg">{teamA.name}</span>
        <span className="mx-4 text-sm text-muted-foreground">vs</span>
        <span className="font-semibold text-lg">{teamB.name}</span>
        <img src={teamB.logoUrl} alt={teamB.name} className="w-12 h-12 ml-4" />
      </div>
      <div className="mb-4">
        <strong>Liga:</strong> <span className="text-muted-foreground">{league.name}</span>
      </div>
      <div className="mb-4">
        <strong>Local:</strong>{" "}
        {venue ? (
          <span className="text-muted-foreground">{`${venue.name} - ${venue.city}`}</span>
        ) : (
          "Não disponível"
        )}
      </div>
      <div className="mb-4">
        <strong>Status:</strong> <span className="text-muted-foreground">{getStatusLabel(fixture.status, fixture.time)}</span>
      </div>
      {!fixture.score && fixture.date && (
        <div className="mb-4">
          <strong>Data:</strong>{" "}
          <span className="text-muted-foreground">{new Date(fixture.date).toLocaleDateString("pt-BR")}</span>
        </div>
      )}
      {fixture.score && (
        <div>
          <strong>Placar:</strong> <span className="text-muted-foreground">{fixture.score}</span>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
