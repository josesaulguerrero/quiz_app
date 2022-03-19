export interface IGameContext {
	setGameState: React.Dispatch<React.SetStateAction<gameStates>>;
	gameState: gameStates;

	setUsername: React.Dispatch<React.SetStateAction<string>>;
	username: string;

	setHasWon: React.Dispatch<React.SetStateAction<boolean>>;
	hasWon: boolean;

	setRound: React.Dispatch<React.SetStateAction<gameRounds>>;
	round: gameRounds;

	setPoints: React.Dispatch<React.SetStateAction<number>>;
	points: number;

	categories: requestState;
}

export interface IAnswer {
	id: number;
	content: string;
	isCorrect: boolean;
}

interface IBasicQuestion {
	id: number;
	content: string;
}

export interface IQuestion extends IBasicQuestion {
	answers: IAnswer[];
}

export interface IBasicCategory {
	id: number;
	name: string;
	difficultyLevel: number;
	questions: IBasicQuestion[];
}

export interface ICategory extends IBasicCategory {
	questions: IQuestion[];
}

export enum gameStates {
	INITIAL = 'INITIAL',
	PLAYING = 'PLAYING',
	GAME_OVER = 'GAME_OVER',
}

export enum gameRounds {
	FIRST = 1,
	SECOND = 2,
	THIRD = 3,
	FOURTH = 4,
	FIFTH = 5,
}

export type requestState = {
	loading: boolean;
	data: Promise<Response> | Promise<Response>[] | unknown;
	error: unknown;
};
