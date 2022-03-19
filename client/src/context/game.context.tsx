import React, { createContext, FC, useEffect, useState } from 'react';
// local modules
import { gameRounds, gameStates, IGameContext } from '../@types';
import { useFetch } from '../hooks/useFetch';

export const GameContext = createContext<IGameContext>(null!);

export const GameContextProvider: FC = ({ children }) => {
	const [gameState, setGameState] = useState<gameStates>(gameStates.INITIAL);
	const [username, setUsername] = useState<string>('');
	const [hasWon, setHasWon] = useState<boolean>(false);
	const [round, setRound] = useState<gameRounds>(gameRounds.FIRST);
	const [points, setPoints] = useState<number>(0);
	const [categoriesRequestState, fetchCategories] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories`
	);
	// we'll fetch some data later
	/*
      1. set the initial config (username)
      2. fetch categories
      3. start game
      4. show questions
      5. set game over if the player loses or wins
      6. show hall of fame if the player won
      7. show game over screen if the player lost
   */

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		console.log(categoriesRequestState);
	}, [categoriesRequestState]);
	return (
		<GameContext.Provider
			value={{
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
				categories: categoriesRequestState,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
