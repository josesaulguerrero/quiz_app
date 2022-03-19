/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useContext, useState } from 'react';
// local modules
import { gameStates, IAnswer, IGameContext, IQuestion } from '../@types';
import { GameContext } from '../context/game.context';
import { Answer } from './Answer';
import { NextButton } from './NextButton';

interface IQuestionProps {
	randomQuestion: IQuestion;
	setRandomQuestion: React.Dispatch<React.SetStateAction<IQuestion | null>>;
}

export const Question: FC<IQuestionProps> = ({
	randomQuestion,
	setRandomQuestion,
}) => {
	const { setPoints, setGameState } = useContext<IGameContext>(GameContext);
	const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

	const renderAnswers = (answers: IAnswer[]) => {
		return answers.map(({ content, id, isCorrect }) => (
			<Answer
				content={content}
				id={id}
				isCorrect={isCorrect}
				key={id}
				setSelected={setSelectedAnswer}
			/>
		));
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if ((selectedAnswer as IAnswer).isCorrect) {
			// if the chosen answer is correct, then the player points will increase.
			setIsCorrect(true);
			setPoints((prevState) => (prevState += 100));
			return;
		}
		// if the player fails the questions, then he'll immediately lose.
		setGameState(gameStates.GAME_OVER);
		setIsCorrect(false);
	};

	return (
		<form onSubmit={onSubmit} className="question">
			<h3>{randomQuestion.content}</h3>
			{renderAnswers(randomQuestion.answers)}
			<button
				type="submit"
				className="questionCheck"
				disabled={!selectedAnswer || isCorrect !== null}
			>
				Check
			</button>
			<NextButton
				isCorrect={isCorrect as boolean}
				setIsCorrect={setIsCorrect}
				setQuestion={setRandomQuestion}
				setSelectedAnswer={setSelectedAnswer}
			/>
		</form>
	);
};
