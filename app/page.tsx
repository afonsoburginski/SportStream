"use client";

import CarouselComponent from "@/components/layouts/CarouselComponent";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useSportsData } from "@/contexts/SportsDataContext";

export default function Page() {
  const { leagues, fixtures, teams } = useSportsData();

  const liveFixtures = fixtures.filter((fixture) =>
    ["1H", "2H"].includes(fixture.status)
  );

  const leaguesWithUpcomingFixtures = leagues.filter((league) =>
    fixtures.some((fixture) => fixture.leagueId === league.id && fixture.status === "NS")
  );

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full h-80 bg-muted/10 rounded-lg flex items-center justify-center">
        <CarouselComponent />
      </div>
      <div className="flex flex-col gap-8 px-4 py-6">
        {liveFixtures.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">AO VIVO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveFixtures.map((fixture) => {
                const teamA = teams.find(
                  (team) => team.name === fixture.match.split(" vs ")[0]
                );
                const teamB = teams.find(
                  (team) => team.name === fixture.match.split(" vs ")[1]
                );
                return (
                  <Link
                    key={fixture.id}
                    href={`/${fixture.id}`}
                    className="bg-muted/50 rounded-lg p-8 shadow-md hover:shadow-lg transition relative flex flex-col justify-center items-center h-48"
                  >
                    <Badge
                      className="absolute top-4 left-4 p-0 flex items-center justify-center text-xs font-semibold h-5 w-14 bg-red-600"
                    >
                      AO VIVO
                    </Badge>

                    <div className="flex justify-between items-center w-full px-4">
                      {teamA?.logoUrl && (
                        <div className="flex flex-col items-center">
                          <Image
                            src={teamA.logoUrl}
                            alt={teamA.name}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                          <span className="text-sm font-semibold mt-2">{teamA.name}</span>
                        </div>
                      )}
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-muted-foreground mb-1">
                          {fixture.time}
                        </span>
                        <span className="text-3xl font-bold">{fixture.score}</span>
                      </div>
                      {teamB?.logoUrl && (
                        <div className="flex flex-col items-center">
                          <Image
                            src={teamB.logoUrl}
                            alt={teamB.name}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                          <span className="text-sm font-semibold mt-2">{teamB.name}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {leaguesWithUpcomingFixtures.map((league) => (
          <div key={league.id} className="flex flex-col gap-6">
            <h2 className="text-lg font-bold">{league.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fixtures
                .filter(
                  (fixture) =>
                    fixture.leagueId === league.id && fixture.status === "NS"
                )
                .map((fixture) => {
                  const teamA = teams.find(
                    (team) => team.name === fixture.match.split(" vs ")[0]
                  );
                  const teamB = teams.find(
                    (team) => team.name === fixture.match.split(" vs ")[1]
                  );
                  return (
                    <Link
                      key={fixture.id}
                      href={`/${fixture.id}`}
                      className="bg-muted/50 rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col justify-center items-center h-36"
                    >
                      <div className="flex justify-between items-center w-full px-4">
                        {teamA?.logoUrl && (
                          <div className="flex flex-col items-center">
                            <Image
                              src={teamA.logoUrl}
                              alt={teamA.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                            <span className="text-sm font-semibold mt-2">{teamA.name}</span>
                          </div>
                        )}
                        <div className="flex flex-col items-center">
                          <span className="text-sm text-muted-foreground mb-1">
                            {new Date(fixture.date || "").toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                          <span className="text-lg font-bold">VS</span>
                        </div>
                        {teamB?.logoUrl && (
                          <div className="flex flex-col items-center">
                            <Image
                              src={teamB.logoUrl}
                              alt={teamB.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                            <span className="text-sm font-semibold mt-2">{teamB.name}</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
