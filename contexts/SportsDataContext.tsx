/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { leagues, fixtures, teams, venues } from "@/lib/data";

const SportsDataContext = createContext<SportsDataContextType | undefined>(undefined);

export const SportsDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SportsDataContextType>({
    leagues: [],
    fixtures: [],
    teams: [],
    venues: [],
    loading: true,
  });

  useEffect(() => {
    const initializeData = () => {
      const normalizedFixtures = fixtures.map((fixture) => ({
        ...fixture,
        status: normalizeStatus(fixture.status), // Normalizar valores de status
      }));
      setData({
        leagues,
        fixtures: normalizedFixtures,
        teams,
        venues,
        loading: false,
      });
    };
  
    initializeData();
  }, []);
  
  const normalizeStatus = (status: string): "Live" | "Upcoming" | "1H" | "2H" | "HT" | "FT" | "NS" => {
    const validStatuses = ["Live", "Upcoming", "1H", "2H", "HT", "FT", "NS"];
    return validStatuses.includes(status) ? (status as any) : "NS"; // Substituir por valor padrão, se necessário
  };
  
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
