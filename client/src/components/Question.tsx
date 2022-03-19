import React, { FC, useEffect } from 'react';
import { ICategory } from '../@types';
import { useFetch } from '../hooks/useFetch';
// local modules

interface IQuestionProps {
	category: ICategory;
}

export const Question: FC<IQuestionProps> = ({ category }) => {
	const [questionRequestState, fetchQuestion] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories/${category.id}`
	);
	useEffect(() => {
		fetchQuestion();
	}, []);

	useEffect(() => {
		console.log(questionRequestState);
	}, [questionRequestState]);
	return <h3>hello</h3>;
};
