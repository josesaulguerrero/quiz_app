import React, { FC } from 'react';
// local modules
import { Welcome } from '../components/Welcome';
import { Wrapper } from '../components/Wrapper';

export const App: FC = () => {
	return (
		<div className="App">
			<Wrapper>
				<Welcome />
			</Wrapper>
		</div>
	);
};
