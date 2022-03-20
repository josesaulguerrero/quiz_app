/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, FC, useEffect, useState } from 'react';
// local modules
import {
	gameOverCauses,
	gameRounds,
	gameStates,
	IGameContext,
} from '../@types';
import { useFetch } from '../hooks/useFetch';

export const GameContext = createContext<IGameContext>(null!);

export const GameContextProvider: FC = ({ children }) => {
	const [gameState, setGameState] = useState<gameStates>(gameStates.INITIAL);
	const [gameOverCause, setGameOverCause] = useState<gameOverCauses | null>(
		null
	);
	const [username, setUsername] = useState<string>('');
	const [hasWon, setHasWon] = useState<boolean>(false);
	const [round, setRound] = useState<gameRounds>(gameRounds.FIRST);
	const [points, setPoints] = useState<number>(0);
	const [categoriesRequestState, fetchCategories] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories`
	);

	useEffect(() => {
		fetchCategories();
	}, []);

	const value: IGameContext = {
		gameState,
		setGameState,
		hasWon,
		setHasWon,
		points,
		setPoints,
		round,
		setRound,
		username,
		setUsername,
		gameOverCause,
		setGameOverCause,
		categories: categoriesRequestState,
	};
	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
