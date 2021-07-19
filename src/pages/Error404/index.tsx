import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
import {Link} from 'react-router-dom';
// Lottie Stuff
import Lottie from 'react-lottie';
import animationData from '../../lotties/error404.json';
// CSS
import { StyledError } from './style';
import { BsHouse } from 'react-icons/bs';

const Error404: React.FC = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	

	function toTop() {
		window.scrollTo(0, 0);
	}
	
	return <>
		{toTop()}

		<StyledError>
			<Grid>
				<Row>
					<Col xs={24}>
						<div className="lottie">
							<Lottie 
								options={defaultOptions}
								height={400}
								width={400}
							/>
						</div>
						<h1>Error 404</h1>
						<h2>A página ao qual você estava procurando não foi encontrada. Por favor, retorne a <Link to=""><BsHouse /> página inicial</Link>.</h2>
					</Col>
				</Row>
			</Grid>
		</StyledError>
	</>;
}

export default Error404;