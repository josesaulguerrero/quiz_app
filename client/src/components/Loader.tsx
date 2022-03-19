import React, { FC } from 'react';
//local modules
import '../styles/loader.styles.css';

export const Loader: FC = () => {
	return (
		<article className="loader">
			<div className="ball"></div>
			<div className="ball"></div>
			<div className="ball"></div>
		</article>
	);
};
