import React, { FC, useContext } from 'react';
// local modules
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import '../styles/fail.styles.css';

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
		<section className="fail">
			<h2 className="failTitle">You lost :(</h2>
			<p className="failContent">
				You reached the round <span>{round}</span> and got <span>{points}</span>{' '}
				points, but don&apos;t worry, you can keep trying!
			</p>
			<button onClick={onTryAgain} className="tryAgainButton">
				Let me try again!
			</button>
		</section>
	);
};
