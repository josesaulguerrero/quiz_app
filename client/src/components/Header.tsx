import React, { FC } from 'react';
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
	return (
		<header>
			<span>
				{round} - {name}
			</span>
			<span>{points}</span>
		</header>
	);
};
