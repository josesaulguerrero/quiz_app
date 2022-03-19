import React, { FC, useEffect, useState } from 'react';
import { IBasicCategory, ICategory, IQuestion } from '../@types';
import { randomElementFromArray } from '../helpers/randomElementFromArray';
import { useFetch } from '../hooks/useFetch';
// local modules

interface IQuestionProps {
	category: IBasicCategory;
}

export const Question: FC<IQuestionProps> = ({ category }) => {
	const [categoryRequestState, fetchCategory] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories/${category.id}`
	);
	const { data, loading, error } = categoryRequestState;
	const [randomQuestion, setRandomQuestion] = useState<IQuestion>(null!);

	useEffect(() => {
		fetchCategory();
	}, []);

	useEffect(() => {
		if (data) {
			setRandomQuestion(
				randomElementFromArray<IQuestion>((data as ICategory).questions)
			);
		}
	}, [categoryRequestState]);

	if (loading || !randomQuestion) return <h2>loading...</h2>;
	return (
		<>
			<h3>{randomQuestion.content}</h3>
			{randomQuestion.answers.map((answer) => (
				<p>{answer.content}</p>
			))}
		</>
	);
};
