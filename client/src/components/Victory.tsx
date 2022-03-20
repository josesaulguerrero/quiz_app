import React, { FC, useContext } from 'react';
// local modules
import { IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import '../styles/victory.styles.css';

export const Victory: FC = () => {
	const { points, round } = useContext<IGameContext>(GameContext);
	return (
		<section className="FailScreen">
			<h2>You won :D</h2>
			<p>
				You reached the round {round} and got {points} points
			</p>
			<h3>Hall Of Fame</h3>
		</section>
	);
};
