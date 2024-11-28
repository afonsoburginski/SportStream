export const leagues = [
  {
    id: 1,
    name: "Champions League",
    logoUrl: "https://media.api-sports.io/football/leagues/1.png",
    country: "Europe",
    type: "league",
    coverage: {
      fixtures: {
        events: true,
        lineups: true,
        statistics_fixtures: true,
        statistics_players: true,
      },
      standings: true,
      players: true,
      top_scorers: true,
      top_assists: true,
      top_cards: true,
      injuries: false,
      predictions: true,
      odds: true,
    },
  },
  {
    id: 2,
    name: "Copa Libertadores",
    logoUrl: "https://media.api-sports.io/football/leagues/2.png",
    country: "South America",
    type: "cup",
    coverage: {
      fixtures: {
        events: true,
        lineups: true,
        statistics_fixtures: false,
        statistics_players: false,
      },
      standings: true,
      players: true,
      top_scorers: true,
      top_assists: true,
      top_cards: true,
      injuries: true,
      predictions: false,
      odds: false,
    },
  },
  {
    id: 3,
    name: "Europa League",
    logoUrl: "https://media.api-sports.io/football/leagues/3.png",
    country: "Europe",
    type: "league",
    coverage: {
      fixtures: {
        events: true,
        lineups: true,
        statistics_fixtures: true,
        statistics_players: true,
      },
      standings: true,
      players: true,
      top_scorers: true,
      top_assists: true,
      top_cards: true,
      injuries: true,
      predictions: true,
      odds: true,
    },
  },
  {
    id: 4,
    name: "Premier League",
    logoUrl: "https://media.api-sports.io/football/leagues/4.png",
    country: "England",
    type: "league",
    coverage: {
      fixtures: {
        events: true,
        lineups: true,
        statistics_fixtures: true,
        statistics_players: true,
      },
      standings: true,
      players: true,
      top_scorers: true,
      top_assists: true,
      top_cards: true,
      injuries: true,
      predictions: true,
      odds: true,
    },
  },
];

export const fixtures = [
  { id: 1, match: "Team A vs Team B", leagueId: 1, status: "1H", time: "35'", score: "1-0" },
  { id: 2, match: "Team C vs Team D", leagueId: 1, status: "1H", time: "22'", score: "0-0" },
  { id: 3, match: "Team E vs Team F", leagueId: 1, status: "NS", date: "2024-11-30 15:00" },
  { id: 4, match: "Team G vs Team H", leagueId: 1, status: "NS", date: "2024-12-02 18:00" },
  { id: 5, match: "Team I vs Team J", leagueId: 4, status: "2H", time: "50'", score: "2-1" },
  { id: 6, match: "Team K vs Team L", leagueId: 4, status: "NS", date: "2024-12-01 14:00" },
  { id: 7, match: "Team M vs Team N", leagueId: 4, status: "NS", date: "2024-12-03 20:00" },
];

export const teams = [
  { id: 1, name: "Team A", logoUrl: "https://media.api-sports.io/football/teams/1.png", country: "Europe" },
  { id: 2, name: "Team B", logoUrl: "https://media.api-sports.io/football/teams/2.png", country: "Europe" },
  { id: 3, name: "Team C", logoUrl: "https://media.api-sports.io/football/teams/3.png", country: "Europe" },
  { id: 4, name: "Team D", logoUrl: "https://media.api-sports.io/football/teams/4.png", country: "Europe" },
  { id: 5, name: "Team E", logoUrl: "https://media.api-sports.io/football/teams/5.png", country: "South America" },
  { id: 6, name: "Team F", logoUrl: "https://media.api-sports.io/football/teams/6.png", country: "South America" },
  { id: 7, name: "Team G", logoUrl: "https://media.api-sports.io/football/teams/7.png", country: "South America" },
  { id: 8, name: "Team H", logoUrl: "https://media.api-sports.io/football/teams/8.png", country: "South America" },
  { id: 9, name: "Team I", logoUrl: "https://media.api-sports.io/football/teams/9.png", country: "Europe" },
  { id: 10, name: "Team J", logoUrl: "https://media.api-sports.io/football/teams/10.png", country: "Europe" },
  { id: 11, name: "Team K", logoUrl: "https://media.api-sports.io/football/teams/11.png", country: "Europe" },
  { id: 12, name: "Team L", logoUrl: "https://media.api-sports.io/football/teams/12.png", country: "Europe" },
  { id: 13, name: "Team M", logoUrl: "https://media.api-sports.io/football/teams/13.png", country: "South America" },
  { id: 14, name: "Team N", logoUrl: "https://media.api-sports.io/football/teams/14.png", country: "South America" },
];


export function getFixtureById(id: number) {
  return fixtures.find((fixture) => fixture.id === id) || null;
}

export function getLeagueById(id: number) {
  return leagues.find((league) => league.id === id) || null;
}

export function getTeamById(id: number) {
  return teams.find((team) => team.id === id) || null;
}
