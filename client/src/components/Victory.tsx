import React, { FC, useContext } from 'react';
// local modules
import { IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import '../styles/victory.styles.css';

export const Victory: FC = () => {
	const { points, round } = useContext<IGameContext>(GameContext);
	return (
		<section className="victory">
			<h2 className="victoryTitle">You won :D</h2>
			<p className="victoryMessage">
				You reached the round {round} and got {points} points
			</p>
			<h3 className="hallOfFameTitle">🎖️Welcome to the Hall Of Fame🎖️</h3>
			<p className="hallOfFameMessage">
				You&apos;ve proved your knowledge, now take a rest to feel proud of
				yourself...
			</p>
		</section>
	);
};
