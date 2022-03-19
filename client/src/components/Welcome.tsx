import React, { FC, useRef, useState } from 'react';

export const Welcome: FC = () => {
	const [inputData, setInputData] = useState<string>('');
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputData(event.target.value);
	};

	const onClick = () => {
		return 'hello';
	};

	return (
		<>
			<h1>Welcome to Funny Trivia!</h1>
			<label htmlFor="nickname">
				Your nickname
				<input
					type="text"
					name="nickname"
					id="nickname"
					placeholder="E.G. Alex92"
					onChange={onChange}
				/>
			</label>
			<button type="button" disabled={!inputData.trim()} onClick={onClick}>
				Let&apos;s get started!
			</button>
		</>
	);
};
