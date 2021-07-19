import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
import Button from '../../components/Button';
// CSS
import { StyledContact } from './style';
// Icons
import { BsPhone, BsGeoAlt } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FiShare2 } from "react-icons/fi";

const Contact: React.FC = () => {
	function toTop() {
		window.scrollTo(0, 0);
	}
	
	return <>
		{toTop()}

		<StyledContact className="section">
			<Grid>
				<Row>
					<Col lg={12} xs={24}>
						<div className="background secondary">
							<h1 className="titulo">Contato</h1>
							<h2>Entre em contato conosco através dos nossos canais de atendimento ou pelo formulário! Estamos aguardando por você</h2>
							<h3><BsPhone /> Telefones</h3>
							<p><a href="tel:63991045896">(63) 9 9104-5896</a> | <a href="tel:6392253534">(63) 9 9225-3534</a> | <a href="tel:63992253534">(63) 9 9225-3534</a></p>
							<h3><BsGeoAlt /> Endereço</h3>
							<p>Quadra 208, Sul Alameda n° 10 - Residencial Maria Clara, Setor Plano Diretor Sul, Palmas - Tocantins</p>
							<h3><FiShare2 /> Redes Sociais</h3>
							<div className="social">
								<a href="https://www.facebook.com/jalapoeiros.ecotour" target="_blank" rel="noreferrer" title="Facebook"><FaFacebookSquare /> /jalapoeiros.ecotour</a>
								<a href="https://www.instagram.com/jalapoeirosecotour/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram /> @jalapoeirosecotour</a>
							</div>
						</div>
					</Col>
					<Col lg={12} xs={24}>
						<div className="background">
							<form action="">
								<Row>
									<Col xs={24}>
										<label htmlFor="nome">Nome</label>
										<input type="text" name="nome" id="nome" className="form-control" required/>
									</Col>
									<Col md={12} xs={24}>
										<label htmlFor="telefone">Telefone</label>
										<input type="text" name="telefone" id="telefone" className="form-control" required/>
									</Col>
									<Col md={12} xs={24}>
										<label htmlFor="email">E-mail</label>
										<input type="email" name="email" id="email" className="form-control" required/>
									</Col>
									<Col xs={24}>
										<label htmlFor="msg">Mensagem</label>
										<textarea rows={4} name="msg" id="msg" className="form-control"></textarea>
										<div className="align-center">
											<Button text="Enviar" type="primaryButton"></Button>
										</div>
									</Col>
								</Row>
							</form>
						</div>
					</Col>
				</Row>
			</Grid>
		</StyledContact>
	</>;
}

export default Contact;