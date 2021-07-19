import React from 'react';
// Components
import {Link} from 'react-router-dom';
import {Col, Grid, Row} from 'rsuite';
// CSS
import { StyledGuide } from './style';
// Images
import indisponivel from '../../assets/images/jpg/indisponivel.jpg';

const Guides: React.FC = () => {
	function toTop() {
		window.scrollTo(0, 0);
	}

	return <>
		{toTop()}
		<StyledGuide className="section inner">
			<Grid>
				<Row>
					<Col xs={24}>
						<h1 className="titulo"><span data-align="center">Roteiros</span></h1>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/1">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>3</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/2">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>3</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/3">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>4</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/4">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>4</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/5">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>5</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/6">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>6</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
					<Col lg={8} md={12} xs={24}>
						<Link to="roteiro/7">
							<div className="roteiro">
								<div className="image">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
								</div>
								<div className="info">
									<div className="header">
										<div className="name">
											<h2>Nome do Passeio</h2>
										</div>
										<div className="time">
											<h3>7</h3>
											<p>dias</p>
										</div>
									</div>
									<div className="body">
										<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ex, corporis modi debitis, veritatis recusandae exercitationem nemo inventore nihil delectus totam tempora atque ab. Atque quaerat nulla eum quas iure.</p>
									</div>
								</div>
							</div>
						</Link>
					</Col>
				</Row>
			</Grid>
		</StyledGuide>
	</>;
}

export default Guides;