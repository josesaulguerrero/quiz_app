import React, { FC, useState } from 'react';
import { gameRounds, IBasicCategory } from '../@types';

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
		<header>
			<button onClick={onOpenQuitModal}>Quit</button>
			<span>
				round {round} - {name}
			</span>
			<span>points - {points}</span>
			{isModalOpen && <p>sth</p>}
		</header>
	);
};
