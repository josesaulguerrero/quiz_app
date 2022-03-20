import React, { FC, useContext, useEffect, useState } from 'react';
// local modules
import { IBasicCategory, ICategory, IGameContext, IQuestion } from '../@types';
import { GameContext } from '../context/game.context';
import { randomElementFromArray } from '../helpers/randomElementFromArray';
import { shuffleArray } from '../helpers/shuffleArray';
import { useFetch } from '../hooks/useFetch';
import { Header } from './Header';
import { Loader } from './Loader';
import { Question } from './Question';
import '../styles/quiz.styles.css';

export const QuizCard: FC = () => {
	const { categories, round, points } = useContext<IGameContext>(GameContext);
	const [randomQuestion, setRandomQuestion] = useState<IQuestion | null>(null);
	const currentCategory =
		categories.data &&
		(categories.data as IBasicCategory[]).find(
			(category) => category.difficultyLevel === round
		);
	const [categoryRequestState, fetchCategory] = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories/${
			(currentCategory as IBasicCategory).id
		}`
	);

	useEffect(() => {
		// we'll refetch the info every time the round changes
		fetchCategory();
	}, [round]);

	useEffect(() => {
		if (categoryRequestState.data) {
			// when the data is ready, we will shuffle the questions and then pick up a random question from the given category
			const randomQuestionFromCategory = randomElementFromArray<IQuestion>(
				shuffleArray((categoryRequestState.data as ICategory).questions)
			);
			// we need to shuffle the answers to avoid the players from cheating!
			const shuffledAnswers = shuffleArray(randomQuestionFromCategory.answers);
			setRandomQuestion(() => ({
				...randomQuestionFromCategory,
				answers: shuffledAnswers,
			}));
		}
	}, [categoryRequestState]);

	return (
		<article className="quiz">
			<Header
				category={currentCategory as IBasicCategory}
				points={points}
				round={round}
			/>
			{categoryRequestState.loading || !randomQuestion ? (
				<Loader />
			) : (
				<Question
					randomQuestion={randomQuestion as IQuestion}
					setRandomQuestion={setRandomQuestion}
				/>
			)}
		</article>
	);
};
