import React, { FC, useContext } from 'react';
// local modules
import { gameRounds, gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import '../styles/victory.styles.css';
import { HallOfFame } from './HallOfFame';

export const Victory: FC = () => {
	const {
		points,
		round,
		setGameState,
		setHasWon,
		setPoints,
		setUsername,
		setRound,
	} = useContext<IGameContext>(GameContext);

	const onGoBackToWelcomeScreen = () => {
		// we need to reset EVERYTHING before going to the welcome home
		setHasWon(false);
		setPoints(0);
		setUsername('');
		setRound(gameRounds.FIRST);
		setGameState(gameStates.INITIAL);
	};

	return (
		<section className="victory">
			<h2 className="victoryTitle">You won :D</h2>
			<p className="victoryMessage">
				You reached the round {round} and got {points} points
			</p>
			<HallOfFame />
			<button
				onClick={() => onGoBackToWelcomeScreen()}
				className="goToWelcomeButton"
				type="button"
			>
				Go to the welcome page
			</button>
		</section>
	);
};
