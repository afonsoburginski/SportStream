"use client";

import React, { useRef } from "react";
import FixtureCard from "@/components/fixtures/FixtureCard";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      event.preventDefault();
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  if (fixtures.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden items-start lg:max-w-[1420px]">
      <h2 className={`text-${isLive ? "2xl" : "xl"} font-bold mb-4`}>
        {title}
      </h2>
      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide w-full"
        style={{ maxWidth: "100%" }}
      >
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
    </div>
  );
};

export default FixturesList;
