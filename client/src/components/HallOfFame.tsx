/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
// local modules
import { IPlayer } from '../@types';
import { useFetch } from '../hooks/useFetch';
import { Loader } from './Loader';
import '../styles/hallOfFame.styles.css';

export const HallOfFame: FC = () => {
	const [winners, setWinners] = useState<IPlayer[] | null>(null);
	const [playersRequestState, fetchPlayers] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/players`
	);
	const { data, loading } = playersRequestState;

	const renderWinners = (winners: IPlayer[]) => {
		if (winners.length <= 0) {
			return (
				<p className="hallOfFameEmpty">No one is in the Hall Of fame yet...</p>
			);
		}
		return winners.map((winner) => (
			<article className="winner" key={winner.id}>
				<p className="winnerName j">🏆 {winner.name}</p>
			</article>
		));
	};

	useEffect(() => {
		fetchPlayers();
	}, []);

	useEffect(() => {
		if (data) {
			setWinners(data as IPlayer[]);
		}
	}, [playersRequestState]);

	return (
		<section className="hallOfFame">
			<h3 className="hallOfFameTitle">🎖️Welcome to the Hall Of Fame🎖️</h3>
			<p className="hallOfFameMessage">
				You&apos;ve proved your knowledge, now take a rest to feel proud of
				yourself...
			</p>
			<section className="winners">
				{loading || !winners ? <Loader /> : renderWinners(winners as IPlayer[])}
			</section>
		</section>
	);
};
