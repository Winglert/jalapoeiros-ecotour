import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
// CSS
import { StyledAbout } from './style';
// Icons
import { BsLifePreserver, BsGem } from "react-icons/bs";
import { FaWhatsapp, FaRegEye } from "react-icons/fa";
// Imagem Indisponível
import indisponivel from '../../assets/images/jpg/indisponivel.jpg';

const About: React.FC = () => {
	function toTop() {
		window.scrollTo(0, 0);
	}
	
	return <>
		{toTop()}
		<StyledAbout className="section inner">
			<Grid>
				<Row className="align-center">
					<Col md={12} xs={24}>
						<img src="./images/jpg/sobre.jpg" alt="Imagem JPG, Jalapoeiros Ecotour" className="principal"/>
					</Col>
					<Col md={12} xs={24}>
						<h2>Descubra um pouco mais sobre a</h2>
						<h1 className="titulo">Jalapoeiros Ecotour</h1>
						<p>A JALAPOEIROS ECOTOUR é uma empresa especializada em ecoturismo de aventura no Jalapão, com um ano no mercado, e especializada em atender empresas; família e grupos de amigos. Contamos com uma equipe de profissionais experientes e altamente qualificados, oferecemos os melhores roteiros, sempre com as melhores opções de hotelaria, restaurantes e demais serviços de qualidade e total assessoria.</p>
						<h3><BsLifePreserver /> Missão</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eos eligendi dolorem ullam beatae maiores iusto facere cupiditate voluptate quae quam, nemo, quidem aliquid molestiae nesciunt molestias quo omnis alias.</p>
						<h3><FaRegEye /> Visão</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas culpa labore delectus reiciendis quia provident veniam, vero eos autem nemo natus nobis? Doloribus, at harum? Autem excepturi cupiditate laboriosam nostrum?</p>
						<h3><BsGem /> Valores</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt optio aspernatur rerum repellat blanditiis velit eos facilis, quo ut, quaerat earum cumque aliquam placeat maxime dicta doloribus! Quidem, beatae officiis?</p>
					</Col>
					<Col xs={24}>
						<h1 className="titulo centered"><span data-align="center">Conheça nossa Equipe</span></h1>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<div className="membro">
							<div className="image">
								<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
							</div>
							<div className="info">
								<h4>Consultora Daianny</h4>
								<p><a href="https://wa.me/5563991045896" target="_blank" rel="noreferrer"><FaWhatsapp /> Whatsapp</a></p>
							</div>
						</div>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<div className="membro">
							<div className="image">
								<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
							</div>
							<div className="info">
								<h4>Consultora Kaylla</h4>
								<p><a href="https://wa.me/message/IZO7D42TF74MN1" target="_blank" rel="noreferrer"><FaWhatsapp /> Whatsapp</a></p>
							</div>
						</div>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<div className="membro">
							<div className="image">
								<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
							</div>
							<div className="info">
								<h4>Consultor Eduardo</h4>
								<p><a href="https://wa.me/5563992253534" target="_blank" rel="noreferrer"><FaWhatsapp /> Whatsapp</a></p>
							</div>
						</div>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<div className="membro">
							<div className="image">
								<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
							</div>
							<div className="info">
								<h4>Parceiras</h4>
								<p><a href="https://wa.me/5563992253534" target="_blank" rel="noreferrer"><FaWhatsapp /> Whatsapp</a></p>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		</StyledAbout>
	</>;
}

export default About;