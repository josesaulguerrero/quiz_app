import React, { FC, useContext, useEffect, useState } from 'react';
// local modules
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import { useFetch } from '../hooks/useFetch';

export const Welcome: FC = () => {
	const { setUsername, setGameState } = useContext<IGameContext>(GameContext);
	const [inputData, setInputData] = useState<string>('');
	const [nicknameIsAvailable, setNicknameIsAvailable] =
		useState<boolean>(false);
	const [playerRequestState, fetchPlayer] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/players?name=${inputData}`
	);
	const { data, loading } = playerRequestState;

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputData(event.target.value);
	};

	const onClick = () => {
		fetchPlayer();
	};

	useEffect(() => {
		if (data) {
			(data as Array<unknown>).length === 0
				? setNicknameIsAvailable(true)
				: setNicknameIsAvailable(false);
		}
	}, [playerRequestState]);

	useEffect(() => {
		if (nicknameIsAvailable && !loading) {
			setUsername(inputData);
			setGameState(gameStates.PLAYING);
		}
	}, [nicknameIsAvailable]);

	return (
		<section className="welcome">
			<h1>Welcome to Funny Trivia!</h1>
			<label htmlFor="nickname">
				Your nickname
				<input
					type="text"
					name="nickname"
					id="nickname"
					placeholder="e.g. Alex92"
					onChange={onChange}
				/>
			</label>
			{(data as Array<unknown>)?.length >= 1 && (
				<p className="error">username is not available...</p>
			)}
			<button
				className="welcomeButton"
				type="button"
				disabled={!inputData.trim() || loading}
				onClick={onClick}
			>
				Let&apos;s get started!
			</button>
		</section>
	);
};
