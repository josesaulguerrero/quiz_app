import { createContext, FC, useState } from 'react';

export const GameContext = createContext<string>(null!);

export const GameContextProvider: FC = ({ children }) => {
	const [gameState, setGameState] = useState<gameStates>(gameStates.INITIAL);
	const [username, setUsername] = useState<string>(null!);
	const [hasWon, setHasWon] = useState<boolean>(false);
	const [round, setRound] = useState<gameRounds>(gameRounds.FIRST);
	const [points, setPoints] = useState<number>(0);
	const categories = ''; //we'll fetch some data later
	const questions = '';
	/*
      1. set the initial config (username)
      2. fetch categories
      3. start game
      4. show questions
      5. set game over if the player loses or wins
      6. show hall of fame if the player won
      7. show game over screen if the player lost
   */
	return (
		<GameContext.Provider value={'hello'}>{children}</GameContext.Provider>
	);
};
