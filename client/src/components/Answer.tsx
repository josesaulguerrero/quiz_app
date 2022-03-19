import React, { FC } from 'react';
// local modules
import { IAnswer } from '../@types';

interface IAnswerProps extends IAnswer {
	setSelected: React.Dispatch<React.SetStateAction<IAnswer | null>>;
}

export const Answer: FC<IAnswerProps> = ({ setSelected, ...answer }) => {
	const onClick = (answer: IAnswer) => {
		setSelected(answer);
	};

	return (
		<label onClick={() => onClick(answer)} htmlFor={`answer-${answer.id}`}>
			<input type="radio" name="answer" id={`answer-${answer.id}`} />
			<p className="content">{answer.content}</p>
		</label>
	);
};
