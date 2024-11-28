/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { leagues, fixtures, teams } from "@/lib/data";

interface League {
  id: number;
  name: string;
  logoUrl: string;
  country: string;
  type: string;
  coverage: any;
}

interface Fixture {
  id: number;
  match: string;
  leagueId: number;
  status: string;
  time?: string;
  score?: string;
  date?: string;
}

interface Team {
  id: number;
  name: string;
  logoUrl: string;
  country: string;
}

interface SportsDataContextType {
  leagues: League[];
  fixtures: Fixture[];
  teams: Team[];
  loading: boolean;
}

const SportsDataContext = createContext<SportsDataContextType | undefined>(undefined);

export const SportsDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SportsDataContextType>({
    leagues: [],
    fixtures: [],
    teams: [],
    loading: true,
  });

  useEffect(() => {
    const initializeData = () => {
      console.log("Loading leagues...");
      console.log(leagues);

      console.log("Loading fixtures...");
      console.log(fixtures);

      console.log("Loading teams...");
      console.log(teams);

      setData({
        leagues,
        fixtures,
        teams,
        loading: false,
      });
    };

    initializeData();
  }, []);

  return (
    <SportsDataContext.Provider value={data}>
      {children}
    </SportsDataContext.Provider>
  );
};

export const useSportsData = () => {
  const context = useContext(SportsDataContext);
  if (!context) {
    throw new Error("useSportsData must be used within a SportsDataProvider");
  }
  return context;
};
