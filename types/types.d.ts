// Tipagem para os dados dos jogos
interface Game {
  id: number;
  match: string;
  league: string;
  status: "Live" | "Upcoming";
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
