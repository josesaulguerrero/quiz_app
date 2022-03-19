import React, { FC } from 'react';
// local modules
import '../styles/quitModal.styles.css';

export const QuitModal: FC = () => {
	return (
		<section className="quitModal">
			<section className="quitModalContent">
				<h3 className="quitModalTitle">Are you sure you want to quit?</h3>
				<section className="quitModalActions">
					<button className="quitModalButton leave">Quit game</button>
					<button className="quitModalButton cancel">Cancel</button>
				</section>
			</section>
		</section>
	);
};
