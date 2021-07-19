// React
import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
// CSS
import { StyledAttraction } from './style';
import FlipCard from '../../components/FlipCard';

const Attractions: React.FC = () => {
	function toTop() {
		window.scrollTo(0, 0);
	}

	function openGallery(e: any) {
		let target = e.currentTarget.querySelector('img');
	 	target.click();
	}
	
	return <>
		{toTop()}
		
		<StyledAttraction className="section inner">
			<Grid>
				<Row>
					<Col xs={24}>
						<h1 className="titulo"><span data-align="center">Pontos Turísticos</span></h1>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/cachoeira-da-formiga/1.jpg"
									text={{
										front: {
											title: 'Cachoeira da Formiga',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/2.jpg" alt="Cachoeira da Formiga - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/3.jpg" alt="Cachoeira da Formiga - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/4.jpg" alt="Cachoeira da Formiga - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/5.jpg" alt="Cachoeira da Formiga - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/6.jpg" alt="Cachoeira da Formiga - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/7.jpg" alt="Cachoeira da Formiga - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-formiga/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-formiga/8.jpg" alt="Cachoeira da Formiga - 8"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/1.jpg"
									text={{
										front: {
											title: 'Cachoeira da Roncadeira',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/2.jpg" alt="Cachoeira da Roncadeira - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/3.jpg" alt="Cachoeira da Roncadeira - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/4.jpg" alt="Cachoeira da Roncadeira - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-roncadeira/5.jpg" alt="Cachoeira da Roncadeira - 5"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/cachoeira-das-araras/1.jpg"
									text={{
										front: {
											title: 'Cachoeira das Araras',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/cachoeira-das-araras/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-das-araras/2.jpg" alt="Cachoeira das Araras - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-das-araras/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-das-araras/3.jpg" alt="Cachoeira das Araras - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-das-araras/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-das-araras/4.jpg" alt="Cachoeira das Araras - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-das-araras/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-das-araras/5.jpg" alt="Cachoeira das Araras - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-das-araras/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-das-araras/6.jpg" alt="Cachoeira das Araras - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-das-araras/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-das-araras/7.jpg" alt="Cachoeira das Araras - 7"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/cachoeira-da-velha/1.jpg"
									text={{
										front: {
											title: 'Cachoeira da Velha',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-velha/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-velha/2.jpg" alt="Cachoeira da Velha - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-velha/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-velha/3.jpg" alt="Cachoeira da Velha - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-velha/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-velha/4.jpg" alt="Cachoeira da Velha - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-velha/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-velha/5.jpg" alt="Cachoeira da Velha - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-velha/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-velha/6.jpg" alt="Cachoeira da Velha - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-da-velha/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-da-velha/7.jpg" alt="Cachoeira da Velha - 7"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/cachoeira-escorrega-macaco/1.jpg"
									text={{
										front: {
											title: 'Cachoeira Escorrega Macaco',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/cachoeira-escorrega-macaco/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-escorrega-macaco/2.jpg" alt="Cachoeira Escorrega Macaco - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/cachoeira-escorrega-macaco/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/cachoeira-escorrega-macaco/3.jpg" alt="Cachoeira Escorrega Macaco - 3"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/canion-sussuapara/1.jpg"
									text={{
										front: {
											title: 'Canion Sussuapara',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/2.jpg" alt="Canion Sussuapara - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/3.jpg" alt="Canion Sussuapara - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/4.jpg" alt="Canion Sussuapara - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/5.jpg" alt="Canion Sussuapara - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/6.jpg" alt="Canion Sussuapara - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/7.jpg" alt="Canion Sussuapara - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/canion-sussuapara/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/canion-sussuapara/8.jpg" alt="Canion Sussuapara - 8"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/dunas-do-jalapao/1.jpg"
									text={{
										front: {
											title: 'Dunas do Jalapão',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/dunas-do-jalapao/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/dunas-do-jalapao/2.jpg" alt="Dunas do Jalapão - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/dunas-do-jalapao/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/dunas-do-jalapao/3.jpg" alt="Dunas do Jalapão - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/dunas-do-jalapao/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/dunas-do-jalapao/4.jpg" alt="Dunas do Jalapão - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/dunas-do-jalapao/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/dunas-do-jalapao/5.jpg" alt="Dunas do Jalapão - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/dunas-do-jalapao/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/dunas-do-jalapao/6.jpg" alt="Dunas do Jalapão - 6"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/fervedouro-bela-vista/1.jpg"
									text={{
										front: {
											title: 'Fervedouro Bela Vista',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/fervedouro-bela-vista/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-bela-vista/2.jpg" alt="Fervedouro Bela Vista - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-bela-vista/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-bela-vista/3.jpg" alt="Fervedouro Bela Vista - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-bela-vista/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-bela-vista/4.jpg" alt="Fervedouro Bela Vista - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-bela-vista/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-bela-vista/5.jpg" alt="Fervedouro Bela Vista - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-bela-vista/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-bela-vista/6.jpg" alt="Fervedouro Bela Vista - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-bela-vista/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-bela-vista/7.jpg" alt="Fervedouro Bela Vista - 7"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/fervedouro-buritis/1.jpg"
									text={{
										front: {
											title: 'Fervedouro Buritis',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/fervedouro-buritis/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-buritis/2.jpg" alt="Fervedouro Buritis - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-buritis/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-buritis/3.jpg" alt="Fervedouro Buritis - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-buritis/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-buritis/4.jpg" alt="Fervedouro Buritis - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-buritis/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-buritis/5.jpg" alt="Fervedouro Buritis - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-buritis/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-buritis/6.jpg" alt="Fervedouro Buritis - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-buritis/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-buritis/7.jpg" alt="Fervedouro Buritis - 7"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/1.jpg"
									text={{
										front: {
											title: 'Fervedouro do Alecrim',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/2.jpg" alt="Fervedouro do Alecrim - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/3.jpg" alt="Fervedouro do Alecrim - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/4.jpg" alt="Fervedouro do Alecrim - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/5.jpg" alt="Fervedouro do Alecrim - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-alecrim/6.jpg" alt="Fervedouro do Alecrim - 6"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/1.jpg"
									text={{
										front: {
											title: 'Fervedouro do Buritizinho',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/2.jpg" alt="Fervedouro do Buritizinho - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/3.jpg" alt="Fervedouro do Buritizinho - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/4.jpg" alt="Fervedouro do Buritizinho - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/5.jpg" alt="Fervedouro do Buritizinho - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/6.jpg" alt="Fervedouro do Buritizinho - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/7.jpg" alt="Fervedouro do Buritizinho - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-buritizinho/8.jpg" alt="Fervedouro do Buritizinho - 8"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/fervedouro-do-ceica/1.jpg"
									text={{
										front: {
											title: 'Fervedouro do Ceica',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/2.jpg" alt="Fervedouro do Ceica - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/3.jpg" alt="Fervedouro do Ceica - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/4.jpg" alt="Fervedouro do Ceica - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/5.jpg" alt="Fervedouro do Ceica - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/6.jpg" alt="Fervedouro do Ceica - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/7.jpg" alt="Fervedouro do Ceica - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/8.jpg" alt="Fervedouro do Ceica - 8"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-do-ceica/9.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-do-ceica/9.jpg" alt="Fervedouro do Ceica - 9"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/fervedouro-encontro-das-aguas/1.jpg"
									text={{
										front: {
											title: 'Fervedouro Encontro das Águas',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/fervedouro-encontro-das-aguas/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-encontro-das-aguas/2.jpg" alt="Fervedouro Encontro das Águas - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/fervedouro-encontro-das-aguas/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/fervedouro-encontro-das-aguas/3.jpg" alt="Fervedouro Encontro das Águas - 3"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/pedra-furada/1.jpg"
									text={{
										front: {
											title: 'Pedra Furada',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/pedra-furada/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pedra-furada/2.jpg" alt="Pedra Furada - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/pedra-furada/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pedra-furada/3.jpg" alt="Pedra Furada - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/pedra-furada/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pedra-furada/4.jpg" alt="Pedra Furada - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/pedra-furada/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pedra-furada/5.jpg" alt="Pedra Furada - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/pedra-furada/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pedra-furada/6.jpg" alt="Pedra Furada - 6"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/1.jpg"
									text={{
										front: {
											title: 'Pousada Águas do Jalapão',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/2.jpg" alt="Pousada Águas do Jalapão - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/3.jpg" alt="Pousada Águas do Jalapão - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/4.jpg" alt="Pousada Águas do Jalapão - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/5.jpg" alt="Pousada Águas do Jalapão - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/6.jpg" alt="Pousada Águas do Jalapão - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/7.jpg" alt="Pousada Águas do Jalapão - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-aguas-do-jalapao/8.jpg" alt="Pousada Águas do Jalapão - 8"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/pousada-beira-da-mata/1.jpg"
									text={{
										front: {
											title: 'Pousada Beira da Mata',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/2.jpg" alt="Pousada Beira da Mata - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/3.jpg" alt="Pousada Beira da Mata - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/4.jpg" alt="Pousada Beira da Mata - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/5.jpg" alt="Pousada Beira da Mata - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/6.jpg" alt="Pousada Beira da Mata - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/7.jpg" alt="Pousada Beira da Mata - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/8.jpg" alt="Pousada Beira da Mata - 8"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/9.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/9.jpg" alt="Pousada Beira da Mata - 9"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-beira-da-mata/10.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-beira-da-mata/10.jpg" alt="Pousada Beira da Mata - 10"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/pousada-sao-felix/1.jpg"
									text={{
										front: {
											title: 'Pousada São Felix',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/2.jpg" alt="Pousada São Felix - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/3.jpg" alt="Pousada São Felix - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/4.jpg" alt="Pousada São Felix - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/5.jpg" alt="Pousada São Felix - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/6.jpg" alt="Pousada São Felix - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/7.jpg" alt="Pousada São Felix - 7"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/8.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/8.jpg" alt="Pousada São Felix - 8"/></a>
								<a href="./images/jpg/pontos-turisticos/pousada-sao-felix/9.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/pousada-sao-felix/9.jpg" alt="Pousada São Felix - 9"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/povoado-mumbuca/1.jpg"
									text={{
										front: {
											title: 'Povoado Mumbuca',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/povoado-mumbuca/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/povoado-mumbuca/2.jpg" alt="Povoado Mumbuca - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/povoado-mumbuca/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/povoado-mumbuca/3.jpg" alt="Povoado Mumbuca - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/povoado-mumbuca/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/povoado-mumbuca/4.jpg" alt="Povoado Mumbuca - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/povoado-mumbuca/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/povoado-mumbuca/5.jpg" alt="Povoado Mumbuca - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/povoado-mumbuca/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/povoado-mumbuca/6.jpg" alt="Povoado Mumbuca - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/povoado-mumbuca/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/povoado-mumbuca/7.jpg" alt="Povoado Mumbuca - 7"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/prainha-do-rio-novo/1.jpg"
									text={{
										front: {
											title: 'Prainha do Rio Novo',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/prainha-do-rio-novo/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/prainha-do-rio-novo/2.jpg" alt="Prainha do Rio Novo - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/prainha-do-rio-novo/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/prainha-do-rio-novo/3.jpg" alt="Prainha do Rio Novo - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/prainha-do-rio-novo/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/prainha-do-rio-novo/4.jpg" alt="Prainha do Rio Novo - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/prainha-do-rio-novo/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/prainha-do-rio-novo/5.jpg" alt="Prainha do Rio Novo - 5"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
					<Col lg={6} sm={12} xs={24}>
						<SimpleReactLightbox>
							<SRLWrapper>
								<FlipCard className="flip-attraction"
									image="./images/jpg/pontos-turisticos/serra-da-catedral/1.jpg"
									text={{
										front: {
											title: 'Serra da Catedral',
											warning: 'Clique e veja mais imagens!'
										},
										back: {
											title: 'Confira a Pousada'
										}
									}}
									onClick={openGallery}
								/>
								<a href="./images/jpg/pontos-turisticos/serra-da-catedral/2.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/serra-da-catedral/2.jpg" alt="Serra da Catedral - 2"/></a>
								<a href="./images/jpg/pontos-turisticos/serra-da-catedral/3.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/serra-da-catedral/3.jpg" alt="Serra da Catedral - 3"/></a>
								<a href="./images/jpg/pontos-turisticos/serra-da-catedral/4.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/serra-da-catedral/4.jpg" alt="Serra da Catedral - 4"/></a>
								<a href="./images/jpg/pontos-turisticos/serra-da-catedral/5.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/serra-da-catedral/5.jpg" alt="Serra da Catedral - 5"/></a>
								<a href="./images/jpg/pontos-turisticos/serra-da-catedral/6.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/serra-da-catedral/6.jpg" alt="Serra da Catedral - 6"/></a>
								<a href="./images/jpg/pontos-turisticos/serra-da-catedral/7.jpg" className="hidden"><img src="./images/jpg/pontos-turisticos/serra-da-catedral/7.jpg" alt="Serra da Catedral - 7"/></a>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
				</Row>
			</Grid>
		</StyledAttraction>
	</>;
}

export default Attractions;