import React, { FC, useEffect } from 'react';
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
	useEffect(() => {
		fetchCategory();
	}, []);

	useEffect(() => {
		if (categoryRequestState.data) {
			const randomQuestion = randomElementFromArray<IQuestion>(
				(categoryRequestState.data as ICategory).questions
			);
			console.log(randomQuestion);
		}
		console.log(categoryRequestState);
	}, [categoryRequestState]);
	return <h3>hello</h3>;
};
