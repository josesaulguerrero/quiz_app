import React, { FC } from 'react';
// local modules
import { IAnswer } from '../@types';
import '../styles/answer.styles.css';

interface IAnswerProps extends IAnswer {
	setSelected: React.Dispatch<React.SetStateAction<IAnswer | null>>;
	selectedAnswer: IAnswer | null;
}

export const Answer: FC<IAnswerProps> = ({
	setSelected,
	selectedAnswer,
	...answer
}) => {
	const onClick = (answer: IAnswer) => {
		setSelected(answer);
	};

	return (
		<label
			className={`answer ${selectedAnswer?.id === answer.id && 'selected'}`}
			onClick={() => onClick(answer)}
			htmlFor={`answer-${answer.id}`}
		>
			<input
				className="answerInput"
				type="radio"
				name="answer"
				id={`answer-${answer.id}`}
			/>
			<p className="answerContent">{answer.content}</p>
		</label>
	);
};
