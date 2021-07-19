import React from 'react';
// Lottie Stuff
import Lottie from 'react-lottie';
import animationData from '../../lotties/loader.json';
// CSS
import { StyledLoader } from './style';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice"
	}
};

const Preloader: React.FC = () => {
	return <>
		<StyledLoader>
			<div className="lottie">
				<Lottie 
					options={defaultOptions}
					height={320}
					width={320}
				/>
			</div>
			<h1>Carregando...</h1>
		</StyledLoader>
	</>;
}

export default Preloader;