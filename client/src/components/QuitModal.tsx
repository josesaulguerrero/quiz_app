import React, { FC, useContext } from 'react';
import { gameStates, IGameContext } from '../@types';
import { GameContext } from '../context/game.context';
// local modules
import '../styles/quitModal.styles.css';

interface IQuitModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuitModal: FC<IQuitModalProps> = ({ isOpen, setIsOpen }) => {
	const { setGameState, setHasWon } = useContext<IGameContext>(GameContext);
	const onQuit = () => {
		setGameState(gameStates.GAME_OVER);
		setHasWon(false);
	};

	return (
		<section className={`quitModal ${isOpen ? 'visible' : 'hidden'}`}>
			<section className="quitModalContent">
				<h3 className="quitModalTitle">Are you sure you want to quit?</h3>
				<section className="quitModalActions">
					<button onClick={onQuit} className="quitModalButton leave">
						Quit game
					</button>
					<button
						onClick={() => setIsOpen(false)}
						className="quitModalButton cancel"
					>
						Cancel
					</button>
				</section>
			</section>
		</section>
	);
};
