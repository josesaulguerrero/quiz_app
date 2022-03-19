// interface IGameContext {}

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
