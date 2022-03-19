import React, { FC, useContext, useState } from 'react';
// local modules
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';

export const Welcome: FC = () => {
	const [inputData, setInputData] = useState<string>('');
	const { setUsername, setGameState } = useContext<IGameContext>(GameContext);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputData(event.target.value);
	};

	const onClick = () => {
		setUsername(inputData);
		setGameState(gameStates.PLAYING);
	};

	return (
		<section className="welcome">
			<h1>Welcome to Funny Trivia!</h1>
			<label htmlFor="nickname">
				Your nickname
				<input
					type="text"
					name="nickname"
					id="nickname"
					placeholder="E.G. Alex92"
					onChange={onChange}
				/>
			</label>
			<button
				className="welcomeButton"
				type="button"
				disabled={!inputData.trim()}
				onClick={onClick}
			>
				Let&apos;s get started!
			</button>
		</section>
	);
};
