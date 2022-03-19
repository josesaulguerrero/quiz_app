import React, { FC, useContext } from 'react';
// local modules
import {
	gameRounds,
	gameStates,
	IAnswer,
	IGameContext,
	IQuestion,
} from '../@types';
import { GameContext } from '../context/game.context';

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
	const { setGameState, round, setHasWon, setRound } =
		useContext<IGameContext>(GameContext);

	const onNext = () => {
		if (round === gameRounds.FIFTH) {
			// if the player has gotten to the last round and answered correctly, then the game will be over and they'll win.
			setGameState(gameStates.GAME_OVER);
			setHasWon(true);
			return;
		}
		// if the game isn't over yet, then we'll go to the next round, and reset the different states.
		setRound((prevState) => (prevState += 1));
		setQuestion(null);
		setIsCorrect(null);
		setSelectedAnswer(null);
	};

	return (
		<button onClick={onNext} type="button" disabled={!isCorrect}>
			next
		</button>
	);
};
