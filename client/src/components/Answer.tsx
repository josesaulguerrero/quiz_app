import React, { FC } from 'react';
// local modules
import { IAnswer } from '../@types';
import '../styles/answer.styles.css';

interface IAnswerProps extends IAnswer {
	setSelected: React.Dispatch<React.SetStateAction<IAnswer | null>>;
	selectedAnswer: IAnswer | null;
	questionWasChecked: boolean;
}

export const Answer: FC<IAnswerProps> = ({
	setSelected,
	selectedAnswer,
	questionWasChecked,
	...answer
}) => {
	const onClick = (answer: IAnswer) => {
		if (!questionWasChecked) {
			// if the question hasn't been check yet, then we can set this answer as "selected"
			setSelected(answer);
		}
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
				disabled={questionWasChecked}
			/>
			<p className="answerContent">{answer.content}</p>
		</label>
	);
};
