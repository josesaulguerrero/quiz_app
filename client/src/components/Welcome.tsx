import React, { FC, useContext, useEffect, useState } from 'react';
// local modules
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
import { useFetch } from '../hooks/useFetch';
import triviaImage from '../assets/science.png';
import '../styles/welcome.styles.css';
import { Loader } from './Loader';

export const Welcome: FC = () => {
	const { setUsername, setGameState } = useContext<IGameContext>(GameContext);
	const [inputData, setInputData] = useState<string>('');
	const [playerRequestState, fetchPlayer] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/players?name=${inputData}`
	);
	const { data, loading } = playerRequestState;

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputData(event.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!inputData.trim()) return;
		fetchPlayer();
	};

	useEffect(() => {
		//if the data is available and there are no users with the given username, then the player can continue
		if (data && (data as Array<unknown>).length === 0) {
			setUsername(inputData);
			setGameState(gameStates.PLAYING);
		}
	}, [playerRequestState]);
	return (
		<section className="welcome">
			<h1 className="welcomeTitle">Welcome to Funny Trivia!</h1>
			<img
				className="welcomeImage"
				src={triviaImage}
				alt="trivia time"
				width="100px"
			/>
			<form className="welcomeForm" onSubmit={onSubmit}>
				<label htmlFor="nickname" className="welcomeLabel">
					Your nickname
					<input
						className="welcomeInput"
						type="text"
						name="nickname"
						id="nickname"
						placeholder="e.g. Alex92"
						onChange={onChange}
					/>
					{(data as Array<unknown>)?.length >= 1 && (
						<span className="welcomeError">username is not available...</span>
					)}
				</label>
				<button
					className="welcomeButton"
					type="submit"
					disabled={!inputData.trim() || loading}
				>
					{loading ? <Loader /> : "Let's get started!"}
				</button>
			</form>
		</section>
	);
};
