import React, { FC, useState } from 'react';
// local modules
import { gameRounds, IBasicCategory } from '../@types';
import quitImage from '../assets/quit.png';
import '../styles/header.styles.css';

interface IHeaderProps {
	category: IBasicCategory;
	round: gameRounds;
	points: number;
}

export const Header: FC<IHeaderProps> = ({
	points,
	round,
	category: { name },
}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const onOpenQuitModal = () => {
		setIsModalOpen(true);
	};

	return (
		<header className="header">
			<button onClick={onOpenQuitModal} className="quitButton">
				<img src={quitImage} alt="quit" width="40" />
			</button>
			<span className="headerRound">
				round {round} - {name}
			</span>
			<span className="headerPoints">points - {points}</span>
			{isModalOpen && <p>sth</p>}
		</header>
	);
};
