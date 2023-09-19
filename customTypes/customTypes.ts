import { moves } from "../src/moves";

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

export interface CurrentTurnProps {
  players: Player[];
  setPlayers: Function;
}

export interface MoveButtonsProps {
  setRoll: Function;
  roll: Roll;
  buttonsDisabled: disableButtons;
  setButtonsDisabled: Function;
}
type disableButtons = {
  pigOut: boolean;
  sider: boolean;
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
  setTurnScore: Function;
}
