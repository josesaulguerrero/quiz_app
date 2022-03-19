import React, { FC, useContext } from 'react';
// local modules
import { Welcome } from '../components/Welcome';
import { Wrapper } from '../components/Wrapper';
import { gameStates, IBasicCategory, ICategory, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import { Question } from '../components/Question';

export const App: FC = () => {
	const { gameState, round, categories, hasWon } =
		useContext<IGameContext>(GameContext);
	const currentCategory =
		categories.data &&
		(categories.data as IBasicCategory[]).find(
			(category) => category.difficultyLevel === round
		);
	return (
		<div className="App">
			<Wrapper>
				{gameState === gameStates.INITIAL && <Welcome />}
				{gameState === gameStates.PLAYING && (
					<Question category={currentCategory as IBasicCategory} />
				)}
				{gameState === gameStates.GAME_OVER && hasWon === true && (
					<p>You won!</p>
				)}
				{gameState === gameStates.GAME_OVER && hasWon === false && (
					<p>Loserrrr</p>
				)}
			</Wrapper>
		</div>
	);
};
