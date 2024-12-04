"use client";

import React from "react";
import FixtureCard from "@/components/fixtures/FixtureCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface FixturesListProps {
  title: string;
  fixtures: Fixture[];
  isLive: boolean;
  teams: Team[];
  venues: Venue[];
  getStatusLabel: (fixture: Fixture) => string;
}

const FixturesList: React.FC<FixturesListProps> = ({
  title,
  fixtures,
  isLive,
  teams,
  venues,
  getStatusLabel,
}) => {
  if (fixtures.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden items-start lg:max-w-[1420px]">
      <h2 className={`text-${isLive ? "2xl" : "xl"} font-bold`}>{title}</h2>
      <ScrollArea className="w-full pb-2">
        <div className="flex gap-4 whitespace-nowrap pt-2 pr-2">
          {fixtures.map((fixture) => (
            <FixtureCard
              key={fixture.id}
              fixture={fixture}
              isLive={isLive}
              teams={teams}
              venues={venues}
              getStatusLabel={getStatusLabel}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FixturesList;
