"use client";

import CarouselComponent from "@/components/layouts/CarouselComponent";
import { useSportsData } from "@/contexts/SportsDataContext";
import FixturesList from "@/components/fixtures/FixturesList";
import React from "react";

export default function Page() {
  const { leagues, fixtures, teams, venues } = useSportsData();

  const liveFixtures = fixtures.filter((fixture) =>
    ["1H", "2H", "HT"].includes(fixture.status)
  );

  const leaguesWithUpcomingFixtures = leagues.filter((league) =>
    fixtures.some((fixture) => fixture.leagueId === league.id && fixture.status === "NS")
  );

  const getStatusLabel = (fixture: Fixture) => {
    switch (fixture.status) {
      case "1H":
        return `Primeiro Tempo - ${fixture.time}`;
      case "2H":
        return `Segundo Tempo - ${fixture.time}`;
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
    <div className="flex flex-col flex-1 overflow-hidden max-w-screen mx-auto">
      <div className="w-full h-80 bg-muted/10 rounded-lg flex items-center justify-center">
        <CarouselComponent />
      </div>
      <div className="flex flex-col gap-8 px-4 py-6 w-full max-w-screen">
        {liveFixtures.length > 0 && (
          <FixturesList
            title="AO VIVO"
            fixtures={liveFixtures}
            isLive={true}
            teams={teams}
            venues={venues}
            getStatusLabel={getStatusLabel}
          />
        )}
        {leaguesWithUpcomingFixtures.map((league) => {
          const upcomingFixtures = fixtures.filter(
            (fixture) => fixture.leagueId === league.id && fixture.status === "NS"
          );

          return (
            <FixturesList
              key={league.id}
              title={league.name}
              fixtures={upcomingFixtures}
              isLive={false}
              teams={teams}
              venues={venues}
              getStatusLabel={getStatusLabel}
            />
          );
        })}
      </div>
    </div>
  );
}
