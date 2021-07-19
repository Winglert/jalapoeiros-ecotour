import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
// CSS
import { FooterContato } from './style';
// Icons
import { BsPhone } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
	return <>
		<FooterContato className="section small">
			<Grid>
				<Row>
					<Col md={8} sm={12} xs={24}>
						<h2>Sobre Nós</h2>
						<p className="small">A JALAPOEIROS ECOTOUR é uma empresa especializada em ecoturismo de aventura no Jalapão, com um ano no mercado, e especializada em atender empresas; família e grupos de amigos.</p>
					</Col>
					<Col md={8} sm={12} xs={24}>
						<h2>Canais de Atendimento</h2>
						<p>
							<a href="tel:63991045896"><BsPhone /> (63) 9 9104-5896</a> | <a href="tel:6392253534"><BsPhone /> (63) 9 9225-3534</a> <br/> <a href="tel:63992253534"><BsPhone /> (63) 9 9225-3534</a>
						</p>
					</Col>
					<Col md={8} xs={24}>
						<h2>Nos acompanhe!</h2>
						<div className="social">
							<a href="https://www.facebook.com/jalapoeiros.ecotour" target="_blank" rel="noreferrer" title="Facebook"><FaFacebookSquare /> /jalapoeiros.ecotour</a>
							<a href="https://www.instagram.com/jalapoeirosecotour/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram /> @jalapoeirosecotour</a>
						</div>
					</Col>
				</Row>
			</Grid>
		</FooterContato>
	</>;
}

export default Footer;