export interface Player {
  name: string;
  totalScore: string;
}

export interface PlayersProps {
  players: Player[];
  setPlayers: Function;
}

export interface PlayProps {
  players: Player[];
  setPlayers: Function;
}

export interface CurrentTurnProps {}

export type Roll = { roll1: string; roll2: string };
