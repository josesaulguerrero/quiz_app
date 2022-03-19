import React, { createContext, FC, useEffect, useState } from 'react';
import { gameRounds, gameStates } from '../@types';
import { useFetch } from '../hooks/useFetch';

export const GameContext = createContext<string>(null!);

export const GameContextProvider: FC = ({ children }) => {
	const [gameState, setGameState] = useState<gameStates>(gameStates.INITIAL);
	const [username, setUsername] = useState<string>(null!);
	const [hasWon, setHasWon] = useState<boolean>(false);
	const [round, setRound] = useState<gameRounds>(gameRounds.FIRST);
	const [points, setPoints] = useState<number>(0);
	const [categories, setCategories] = useState(null!);
	const [question, setQuestion] = useState(null!);
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
	const [categoriesRequestState, fetchCategories] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories`
	);

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		console.log(categoriesRequestState);
	}, [categoriesRequestState]);
	return <GameContext.Provider value="hello">{children}</GameContext.Provider>;
};
