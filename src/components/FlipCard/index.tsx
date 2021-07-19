import React from 'react';

import { StyledFlipCard } from './style';

interface Props {
	image: string;
	text: {
		front: {
			title: string,
			warning?: string
		},
		back: {
			title?: string,
			warning?: string
		}
	}
	className ?: any;
	onClick ?: (e: any) => void;
}

const FlipCard: React.FC<Props> = ({className, onClick, ...Props}) => {
	const text = {
		front: {
			warning: Props.text.front.warning ? Props.text.front.warning : 'Clique e saiba mais!'
		},
		back: {
			title: Props.text.back.title ? Props.text.back.title : Props.text.front.title,
			warning: Props.text.back.warning ? Props.text.back.warning : Props.text.front.warning
		}
	};

	return <>
		<StyledFlipCard className={className} onClick={onClick}>
			<div className="wrapper">
				<div className="front">
					<img src={Props.image} alt={Props.text.front.title}/>
					<div className="overlay">
						<h2>{Props.text.front.title}</h2>
						<p>{text.front.warning}</p>
					</div>
				</div>
				<div className="back">
					<img src={Props.image} alt={Props.text.front.title}/>
					<div className="overlay">
						<h2>{text.back.title}</h2>
						<p>{text.back.warning}</p>
					</div>
				</div>
			</div>
		</StyledFlipCard>
	</>;
}

export default FlipCard;