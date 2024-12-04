// components/FixtureCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface FixtureCardProps {
  fixture: Fixture;
  isLive: boolean;
  teams: Team[];
  venues: Venue[];
  getStatusLabel: (fixture: Fixture) => string;
}

const FixtureCard: React.FC<FixtureCardProps> = ({
  fixture,
  isLive,
  teams,
  venues,
  getStatusLabel,
}) => {
  const teamA = teams.find(
    (team) => team.name === fixture.match.split(" vs ")[0]
  );
  const teamB = teams.find(
    (team) => team.name === fixture.match.split(" vs ")[1]
  );
  const venue = venues.find((v) => v.id === fixture.venueId);

  const isUpcoming = fixture.status === "Upcoming" || fixture.status === "NS";

  return (
    <div className="relative w-72 flex-shrink-0 h-48"> {/* Maior largura, menor altura */}
      <Link
        href={`/${fixture.id}`}
        className="relative group w-full h-full block"
      >
        <div className="absolute left-0 bottom-0 w-2 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-transform duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 h-2 w-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-transform duration-300 rounded-lg"></div>
        <div className="relative bg-muted/20 rounded-lg p-4 shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 z-10 h-full flex flex-col justify-center items-center gap-2">
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
          {isLive && (
            <Badge
              variant="destructive"
              className="absolute top-0 left-0 p-0 flex items-center justify-center text-xs font-semibold h-[18px] rounded-none w-16 z-10"
            >
              AO VIVO
            </Badge>
          )}
          {isUpcoming && (
            <Badge
              variant="secondary"
              className="absolute top-0 left-0 p-0 flex items-center justify-center text-xs font-semibold h-[18px] rounded-none w-20 z-10"
            >
              EM BREVE
            </Badge>
          )}
          <div className="flex justify-between items-center w-full max-w-xs gap-2">
            {teamA?.logoUrl && (
              <div className="flex flex-col items-center gap-1">
                <Image
                  src={teamA.logoUrl}
                  alt={teamA.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-sm font-semibold">{teamA.name}</span>
              </div>
            )}
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-muted-foreground">
                {getStatusLabel(fixture)}
              </span>
              <span className="text-lg font-bold">
                {isLive ? fixture.score : "VS"}
              </span>
            </div>
            {teamB?.logoUrl && (
              <div className="flex flex-col items-center gap-1">
                <Image
                  src={teamB.logoUrl}
                  alt={teamB.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-sm font-semibold">{teamB.name}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
      <p className="text-xs text-muted-foreground mt-2 text-start">
        <span className="font-semibold text-white">{teamA?.name}</span> x{" "}
        <span className="font-semibold text-white">{teamB?.name}</span> - {venue?.name},{" "}
        {venue?.city}
      </p>
    </div>
  );
};

export default FixtureCard;
