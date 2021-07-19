import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
// CSS
import { StyledFooter } from './style';

const Copyright: React.FC = () => {
	return <>
		<StyledFooter>
			<img src="./images/gif/jeep.gif" alt="Imagem GIF, Jeep"/>
			<Grid>
				<Row>
					<Col xs={24}>
						<p>Copyright &copy; 2021 Jalapoeiros Ecotour. All Rights Reserved.</p>
					</Col>
				</Row>
			</Grid>
		</StyledFooter>
	</>;
}

export default Copyright;