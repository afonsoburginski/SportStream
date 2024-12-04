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
  {
    id: 5,
    name: "Serie A",
    logoUrl: "https://media.api-sports.io/football/leagues/5.png",
    country: "Italy",
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
    id: 6,
    name: "La Liga",
    logoUrl: "https://media.api-sports.io/football/leagues/6.png",
    country: "Spain",
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
    id: 7,
    name: "Bundesliga",
    logoUrl: "https://media.api-sports.io/football/leagues/7.png",
    country: "Germany",
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

export const venues = [
  {
    id: 1,
    name: "Allianz Arena",
    city: "Munich",
    country: "Germany",
    imageUrl: "https://media.api-sports.io/football/venues/1.png",
  },
  {
    id: 2,
    name: "Camp Nou",
    city: "Barcelona",
    country: "Spain",
    imageUrl: "https://media.api-sports.io/football/venues/2.png",
  },
  {
    id: 3,
    name: "Maracanã",
    city: "Rio de Janeiro",
    country: "Brazil",
    imageUrl: "https://media.api-sports.io/football/venues/3.png",
  },
  {
    id: 4,
    name: "Wembley Stadium",
    city: "London",
    country: "England",
    imageUrl: "https://media.api-sports.io/football/venues/4.png",
  },
  {
    id: 5,
    name: "San Siro",
    city: "Milan",
    country: "Italy",
    imageUrl: "https://media.api-sports.io/football/venues/5.png",
  },
  {
    id: 6,
    name: "Santiago Bernabéu",
    city: "Madrid",
    country: "Spain",
    imageUrl: "https://media.api-sports.io/football/venues/6.png",
  },
  {
    id: 7,
    name: "Signal Iduna Park",
    city: "Dortmund",
    country: "Germany",
    imageUrl: "https://media.api-sports.io/football/venues/7.png",
  },
];

export const fixtures = [
  { id: 1, match: "Team A vs Team B", leagueId: 1, venueId: 1, status: "1H", time: "35'", score: "1-0" },
  { id: 2, match: "Team C vs Team D", leagueId: 1, venueId: 2, status: "1H", time: "22'", score: "0-0" },
  { id: 3, match: "Team E vs Team F", leagueId: 1, venueId: 3, status: "NS", date: "2024-11-30 15:00" },
  { id: 4, match: "Team G vs Team H", leagueId: 1, venueId: 4, status: "NS", date: "2024-12-02 18:00" },
  { id: 5, match: "Team I vs Team J", leagueId: 4, venueId: 5, status: "2H", time: "50'", score: "2-1" },
  { id: 6, match: "Team K vs Team L", leagueId: 4, venueId: 1, status: "NS", date: "2024-12-01 14:00" },
  { id: 7, match: "Team M vs Team N", leagueId: 4, venueId: 2, status: "NS", date: "2024-12-03 20:00" },
  { id: 8, match: "Team O vs Team P", leagueId: 5, venueId: 3, status: "NS", date: "2024-12-05 19:00" },
  { id: 9, match: "Real Madrid vs Barcelona", leagueId: 6, venueId: 6, status: "NS", date: "2024-12-08 21:00" },
  { id: 10, match: "Bayern Munich vs Borussia Dortmund", leagueId: 7, venueId: 7, status: "NS", date: "2024-12-09 20:00" },

  // Novos Fixtures ao Vivo
  { id: 11, match: "Team A vs Team C", leagueId: 1, venueId: 1, status: "1H", time: "15'", score: "0-0" },
  { id: 12, match: "Team D vs Team E", leagueId: 1, venueId: 2, status: "HT", time: "45'", score: "1-1" },
  { id: 13, match: "Team F vs Team G", leagueId: 2, venueId: 3, status: "2H", time: "60'", score: "2-1" },
];

export const standings = [
  {
    leagueId: 1,
    season: 2024,
    table: [
      { position: 1, teamId: 1, points: 45, played: 20, won: 14, drawn: 3, lost: 3 },
      { position: 2, teamId: 2, points: 43, played: 20, won: 13, drawn: 4, lost: 3 },
      // Adicione mais times conforme necessário
    ],
  },
  {
    leagueId: 5,
    season: 2024,
    table: [
      { position: 1, teamId: 15, points: 48, played: 20, won: 15, drawn: 3, lost: 2 },
      { position: 2, teamId: 16, points: 42, played: 20, won: 13, drawn: 3, lost: 4 },
      // Adicione mais times conforme necessário
    ],
  },
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
  { id: 15, name: "Team O", logoUrl: "https://media.api-sports.io/football/teams/15.png", country: "Italy" },
  { id: 16, name: "Team P", logoUrl: "https://media.api-sports.io/football/teams/16.png", country: "Italy" },
  { id: 17, name: "Real Madrid", logoUrl: "https://media.api-sports.io/football/teams/17.png", country: "Spain" },
  { id: 18, name: "Barcelona", logoUrl: "https://media.api-sports.io/football/teams/18.png", country: "Spain" },
  { id: 19, name: "Bayern Munich", logoUrl: "https://media.api-sports.io/football/teams/19.png", country: "Germany" },
  { id: 20, name: "Borussia Dortmund", logoUrl: "https://media.api-sports.io/football/teams/20.png", country: "Germany" },
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

export function getStandingsByLeagueAndSeason(leagueId: number, season: number) {
  return standings.find((standing) => standing.leagueId === leagueId && standing.season === season) || null;
}

export function getVenueById(id: number) {
  return venues.find((venue) => venue.id === id) || null;
}

export function getFixturesByVenue(venueId: number) {
  return fixtures.filter((fixture) => fixture.venueId === venueId);
}
