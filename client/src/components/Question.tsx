import React, { FC, useEffect, useState } from 'react';
// local modules
import { IAnswer, IBasicCategory, ICategory, IQuestion } from '../@types';
import { randomElementFromArray } from '../helpers/randomElementFromArray';
import { useFetch } from '../hooks/useFetch';
import { Answer } from './Answer';

interface IQuestionProps {
	category: IBasicCategory;
}

export const Question: FC<IQuestionProps> = ({ category }) => {
	const [categoryRequestState, fetchCategory] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories/${category.id}`
	);
	const { data, loading } = categoryRequestState;
	const [randomQuestion, setRandomQuestion] = useState<IQuestion>();
	const [selectedAnswer, setSelectedAnswer] = useState<IAnswer>();

	const renderAnswers = (answers: IAnswer[]) =>
		answers.map(({ content, id, isCorrect }) => (
			<Answer
				content={content}
				id={id}
				isCorrect={isCorrect}
				key={id}
				setSelected={setSelectedAnswer}
			/>
		));

	const checkAnswer = (answer: IAnswer) => {
		return answer.isCorrect;
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (checkAnswer(selectedAnswer as IAnswer)) {
			return console.log('yesssss, correct!!!');
		}
	};

	useEffect(() => {
		fetchCategory();
	}, []);

	useEffect(() => {
		if (data) {
			// we will pick up a random question from the given category
			setRandomQuestion(
				randomElementFromArray<IQuestion>((data as ICategory).questions)
			);
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
				disabled={!selectedAnswer}
			>
				Check
			</button>
		</form>
	);
};
