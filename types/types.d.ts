// src/types.d.ts

/* eslint-disable @typescript-eslint/no-explicit-any */

// Declare global types
export {};

declare global {
  interface Game {
    id: number;
    match: string;
    league?: string; // Tornado opcional, pois nem todos os dados têm essa propriedade
    status: "Live" | "Upcoming" | "1H" | "2H" | "HT" | "FT" | "NS";
    time?: string;
    score?: string;
    date?: string;
  }

  type GetGameById = (id: number) => Game | null;

  interface VideoPlayerProps {
    slug: string;
  }

  interface LiveChatProps {
    onEmoteSelect: (emote: string) => void;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
  }

  interface Fixture extends Omit<Game, "league"> { // Removida a propriedade league para evitar conflitos
    leagueId: number;
    venueId: number;
  }

  interface Team {
    id: number;
    name: string;
    logoUrl: string;
    country: string;
  }

  interface Venue {
    id: number;
    name: string;
    city: string;
    country: string;
    imageUrl: string;
  }

  interface League {
    id: number;
    name: string;
    logoUrl: string;
    country: string;
    type: string;
    coverage: any;
  }

  interface SportsDataContextType {
    leagues: League[];
    fixtures: Fixture[];
    teams: Team[];
    venues: Venue[];
    loading: boolean;
  }
}
