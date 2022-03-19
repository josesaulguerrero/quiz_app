import React, { FC, useContext } from 'react';
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';

export const Fail: FC = () => {
	const { setGameState, setPoints, points, setRound, round } =
		useContext<IGameContext>(GameContext);

	const onTryAgain = () => {
		// if the player fails, we will reset everything to its initial value
		setGameState(gameStates.PLAYING);
		setPoints(0);
		setRound(1);
	};

	return (
		<section className="FailScreen">
			<h2>You lost :(</h2>
			<p>
				You reach the round {round} and got {points} points
			</p>
			<button onClick={onTryAgain}>Let me try again!</button>
		</section>
	);
};
