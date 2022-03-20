/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useContext, useState } from 'react';
// local modules
import { IAnswer, IGameContext, IQuestion } from '../@types';
import { GameContext } from '../context/game.context';
import { Answer } from './Answer';
import { NextButton } from './NextButton';
import '../styles/question.styles.css';

interface IQuestionProps {
	randomQuestion: IQuestion;
	setRandomQuestion: React.Dispatch<React.SetStateAction<IQuestion | null>>;
}

export const Question: FC<IQuestionProps> = ({
	randomQuestion,
	setRandomQuestion,
}) => {
	const { setPoints } = useContext<IGameContext>(GameContext);
	const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [questionWasChecked, setQuestionWasChecked] = useState<boolean>(false);

	const renderAnswers = (answers: IAnswer[]) => {
		return answers.map(({ content, id, isCorrect }) => (
			<Answer
				content={content}
				id={id}
				isCorrect={isCorrect}
				key={id}
				setSelectedAnswer={setSelectedAnswer}
				selectedAnswer={selectedAnswer}
				questionWasChecked={questionWasChecked}
			/>
		));
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setQuestionWasChecked(true);
		if ((selectedAnswer as IAnswer).isCorrect) {
			// if the chosen answer is correct, then the player points will increase.
			setIsCorrect(true);
			setPoints((prevState) => (prevState === 0 ? 10 : (prevState *= 5)));
			return;
		}
		// if the player fails the questions, then he'll immediately lose and lose their points.
		setPoints(0);
		setIsCorrect(false);
	};

	return (
		<form onSubmit={onSubmit} className="question">
			<h3 className="questionContent">{randomQuestion.content}</h3>
			{renderAnswers(randomQuestion.answers)}
			<section className="buttons">
				<button
					type="submit"
					className="questionCheckButton"
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
			</section>
		</form>
	);
};
