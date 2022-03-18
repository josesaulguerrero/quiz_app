import React, { FC } from 'react';
// local modules
import '../styles/wrapper.styles.css';

export const Wrapper: FC = ({ children }) => {
	return <main className="Wrapper">{children}</main>;
};
