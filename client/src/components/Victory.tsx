import React, { FC, useContext } from 'react';
// local modules
import { IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import '../styles/victory.styles.css';
import { HallOfFame } from './HallOfFame';

export const Victory: FC = () => {
	const { points, round } = useContext<IGameContext>(GameContext);
	return (
		<section className="victory">
			<h2 className="victoryTitle">You won :D</h2>
			<p className="victoryMessage">
				You reached the round {round} and got {points} points
			</p>
			<HallOfFame />
		</section>
	);
};
