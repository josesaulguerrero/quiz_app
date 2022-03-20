import React, { FC, useContext } from 'react';
// local modules
import {
	gameOverCauses,
	gameRounds,
	gameStates,
	IAnswer,
	IGameContext,
	IQuestion,
} from '../@types';
import { GameContext } from '../context/game.context';
import { useFetch } from '../hooks/useFetch';
import '../styles/nextButton.styles.css';

interface INextButtonProps {
	isCorrect: boolean | null;
	setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
	setSelectedAnswer: React.Dispatch<React.SetStateAction<IAnswer | null>>;
	setQuestion: React.Dispatch<React.SetStateAction<IQuestion | null>>;
}

export const NextButton: FC<INextButtonProps> = ({
	isCorrect,
	setIsCorrect,
	setSelectedAnswer,
	setQuestion,
}) => {
	const {
		setGameState,
		round,
		username,
		setHasWon,
		setRound,
		setGameOverCause,
	} = useContext<IGameContext>(GameContext);
	const body = JSON.stringify({
		name: username,
	});
	const [, createPlayer] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/players`,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		}
	);

	const onFinalRound = async () => {
		await createPlayer();
		// if the player has gotten to the last round and answered correctly, then the game will be over and they'll win.
		setGameState(gameStates.GAME_OVER);
		setHasWon(true);
	};

	const onCorrectAnswer = () => {
		setRound((prevState) => (prevState < 5 ? (prevState += 1) : prevState));
		setQuestion(null);
		setIsCorrect(null);
		setSelectedAnswer(null);
	};

	const onWrongAnswer = () => {
		setGameState(gameStates.GAME_OVER);
		setGameOverCause(gameOverCauses.FAILED);
	};

	const onNext = async () => {
		round === gameRounds.FIFTH && isCorrect && (await onFinalRound());
		// if the game isn't over yet, then we'll go to the next round, and reset the different states.
		if (!isCorrect) {
			return onWrongAnswer();
		}
		onCorrectAnswer();
	};

	const getClass = () => {
		return isCorrect ? 'correct' : 'wrong';
	};

	return (
		<button
			className={`nextButton ${isCorrect !== null && getClass()}`}
			onClick={onNext}
			type="button"
			disabled={isCorrect === null}
		>
			Next
		</button>
	);
};
