import React, { FC, useContext } from 'react';
// local modules
import { gameOverCauses, gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import '../styles/fail.styles.css';

export const Fail: FC = () => {
	const { setGameState, setPoints, points, setRound, round, gameOverCause } =
		useContext<IGameContext>(GameContext);

	const onTryAgain = () => {
		// if the player fails, we will reset everything to its initial value
		setGameState(gameStates.PLAYING);
		setPoints(0);
		setRound(1);
	};

	const getText = () => {
		return gameOverCause === gameOverCauses.QUIT ? (
			<p className="failContent">
				You reached the round <span>{round}</span> and got <span>{points}</span>{' '}
				points. Try again and get even more points!
			</p>
		) : (
			<p className="failContent">
				You failed and lost all of your points... But don&apos;t worry, you can
				keep trying!
			</p>
		);
	};

	return (
		<section className="fail">
			<h2 className="failTitle">
				{gameOverCause === gameOverCauses.QUIT ? 'You quit...' : 'You lost :('}
			</h2>
			{getText()}
			<button onClick={onTryAgain} className="tryAgainButton">
				Let me try again!
			</button>
		</section>
	);
};
