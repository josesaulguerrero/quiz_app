import { FC } from 'react';

export const Wrapper: FC = ({ children }) => {
	return (
		<main className="Wrapper">
			<h1>hello</h1>
			{children}
		</main>
	);
};
