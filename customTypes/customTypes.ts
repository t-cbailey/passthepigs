import { moves } from "../src/moves";

export interface Player {
  name: string;
  scores: number[];
}

export interface PlayersProps {
  players: Player[];
  setPlayers: Function;
  setWinningScore: Function;
  winningScore: number;
}

export interface PlayProps {
  players: Player[];
  setPlayers: Function;
  winningScore: number;
}

export interface CurrentTurnProps {
  players: Player[];
  setPlayers: Function;
  winningScore: number;
  currentPlayer: number;
  turnScore: number;
  setTurnScore: Function;
  setCurrentPlayer: Function;
}

export interface MoveButtonsProps {
  setRoll: Function;
  roll: Roll;
  buttonsDisabled: disableButtons;
  setButtonsDisabled: Function;
}
type disableButtons = {
  siderWithDot: boolean;
  siderNoDot: boolean;
  razorback: boolean;
  leaningJowler: boolean;
  trotter: boolean;
  snouter: boolean;
  makinBacon: boolean;
};

export type Roll = {
  roll1: keyof typeof moves | "";
  roll2: keyof typeof moves | "";
};
export type SingleRoll = { name: keyof typeof moves };

export interface CurrentRollStatsProps {
  roll: Roll;
  setRoll: Function;
  setTurnScore: Function;
  rollScore: number;
  setRollScore: Function;
  setButtonsDisabled: Function;
  setCurrentPlayer: Function;
  currentPlayer: number;
  players: Player[];
  turnScore: number;
  setPlayers: Function;
}

export interface WinProps {
  setTurnScore: Function;
  setWin: Function;
  players: Player[];
  currentPlayer: number;
  setPlayers: Function;
  setRollScore: Function;
  setCurrentPlayer: Function;
  setButtonsDisabled: Function;
  setRoll: Function;
}
