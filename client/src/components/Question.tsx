/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
// local modules
import {
	gameStates,
	IAnswer,
	IBasicCategory,
	ICategory,
	IGameContext,
	IQuestion,
} from '../@types';
import { GameContext } from '../context/game.context';
import { randomElementFromArray } from '../helpers/randomElementFromArray';
import { shuffleArray } from '../helpers/shuffleArray';
import { useFetch } from '../hooks/useFetch';
import { Answer } from './Answer';

interface IQuestionProps {
	category: IBasicCategory;
}

export const Question: FC<IQuestionProps> = ({ category }) => {
	const { setRound, round, setHasWon, setPoints, setGameState } =
		useContext<IGameContext>(GameContext);
	const [categoryRequestState, fetchCategory] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories/${category.id}`
	);
	const { data, loading } = categoryRequestState;
	const [randomQuestion, setRandomQuestion] = useState<IQuestion>();
	const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null);
	const [isCorrect, setIsCorrect] = useState<boolean>();

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

	const checkAnswer = (answer: IAnswer) => {
		return answer.isCorrect;
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (checkAnswer(selectedAnswer as IAnswer)) {
			setIsCorrect(true);
			setPoints((prevState) => (prevState += 100));
			return;
		}
		setHasWon(false);
		setGameState(gameStates.GAME_OVER);
		setIsCorrect(false);
	};

	const onClick = () => {
		setRound((prevState) => (prevState += 1));
		setIsCorrect(undefined);
		setSelectedAnswer(null);
	};

	useEffect(() => {
		fetchCategory();
	}, [round]);

	useEffect(() => {
		if (data) {
			// we will pick up a random question from the given category
			const randomQuestionFromCategory = randomElementFromArray<IQuestion>(
				(data as ICategory).questions
			);
			// we need to shuffle the answers to avoid the players from cheating!
			const shuffledAnswers = shuffleArray(randomQuestionFromCategory.answers);
			setRandomQuestion(() => ({
				...randomQuestionFromCategory,
				answers: shuffledAnswers,
			}));
		}
	}, [categoryRequestState]);

	if (loading || !randomQuestion) return <h2>loading...</h2>;
	return (
		<form onSubmit={onSubmit} className="question">
			<h3>{randomQuestion.content}</h3>
			{renderAnswers(randomQuestion.answers)}
			<button
				type="submit"
				className="questionCheck"
				disabled={!selectedAnswer || isCorrect !== undefined}
			>
				Check
			</button>
			<button onClick={onClick} type="button" disabled={!isCorrect}>
				next
			</button>
		</form>
	);
};
