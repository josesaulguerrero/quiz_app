import React, { FC, useContext } from 'react';
// local modules
import { Welcome } from '../components/Welcome';
import { Wrapper } from '../components/Wrapper';
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import { QuizCard } from '../components/QuizCard';
import { Fail } from '../components/Fail';
import { Victory } from '../components/Victory';

export const App: FC = () => {
	const { gameState, hasWon } = useContext<IGameContext>(GameContext);

	return (
		<div className="App">
			<Wrapper>
				{gameState === gameStates.INITIAL && <Welcome />}
				{gameState === gameStates.PLAYING && <QuizCard />}
				{gameState === gameStates.GAME_OVER && hasWon === true && <Victory />}
				{gameState === gameStates.GAME_OVER && hasWon === false && <Fail />}
			</Wrapper>
		</div>
	);
};
