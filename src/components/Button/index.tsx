import React from 'react';

import { CustomButton } from './style';

interface Props {
	text: string;
	textHover?: string;
	type: 'primaryButton' | 'secondaryButton';
	onClick?: () => void;
}

const Button: React.FC<Props> = ({text, textHover = text, type, onClick}) => {
	const buttonTheme = {
		primaryButton: {
			background: '#10AF53',
			color: '#FFFFFF',
			hover: {
				background: '#119047',
				color: '#FFF'
			}
		},
		secondaryButton: {
			background: '#603317',
			color: '#FFF',
			hover: {
				background: '#442410',
				color: '#FFF'
			}
		}
	};
	return <>
		<CustomButton theme={buttonTheme[type]} onClick={onClick}>
			<div className="front">
				{text}
			</div>
			<div className="back">
				{textHover}
			</div>
		</CustomButton>
	</>;
}

export default Button;