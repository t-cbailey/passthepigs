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
