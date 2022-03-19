import React, { FC, useContext } from 'react';
// local modules
import { Welcome } from '../components/Welcome';
import { Wrapper } from '../components/Wrapper';
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';

export const App: FC = () => {
	const { gameState } = useContext<IGameContext>(GameContext);
	return (
		<div className="App">
			<Wrapper>
				{gameState === gameStates.INITIAL && <Welcome />}
				{gameState === gameStates.PLAYING && <p>playing</p>}
			</Wrapper>
		</div>
	);
};
