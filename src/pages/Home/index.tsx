import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// Components
import {Col, FlexboxGrid, Grid, Row, Modal} from 'rsuite';
import Carousel from 'react-multi-carousel';
//import {Link} from 'react-router-dom';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import {CustomCarousel, Introduction, CallToAction, Gallery, Reviews} from './style';
import Button from '../../components/Button';
import FlipCard from '../../components/FlipCard';
// Image
import indisponivel from '../../assets/images/jpg/indisponivel.jpg';
// Icons
//import { AiFillHeart } from "react-icons/ai";

interface modalContext {
	title: string,
	content: string
}

const Home: React.FC = () => {
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const [modalData, setModalData] = useState<modalContext>({
		title : 'OPS! Algo aconteceu de errado.',
		content: 'Aconteceu alguma coisa de errado e a informação não foi carregada da maneira que deveria. Por favor, tente novamente dentro de alguns instantes. Obrigado!'
	});

	const handleData = ({title, content} : modalContext) => setModalData({
		...modalData, title, content
	})

	const responsivePainel = {
		desktop: {
			breakpoint: {max: 3000, min: 992},
			items: 1
		},
		tablet: {
			breakpoint: {max: 991, min: 576},
			items: 1
		},
		mobile: {
			breakpoint: {max: 575, min: 0},
			items: 1
		}
	}

	const responsiveGaleria = {
		desktop: {
			breakpoint: {max: 3000, min: 992},
			items: 4
		},
		tablet: {
			breakpoint: {max: 991, min: 576},
			items: 2
		},
		mobile: {
			breakpoint: {max: 575, min: 0},
			items: 1
		}
	}

	const responsiveReviews = {
		desktop: {
			breakpoint: {max: 3000, min: 992},
			items: 3
		},
		tablet: {
			breakpoint: {max: 991, min: 576},
			items: 2
		},
		mobile: {
			breakpoint: {max: 575, min: 0},
			items: 1
		}
	}

	const flipRoteiros = {
		front: {
			title: 'Roteiros',
			warning: 'Clique e saiba mais!'
		},
		back: {
			title: 'Descubra aventuras',
			warning: 'Clique e saiba mais!'
		}
	}

	const flipDica = {
		front: {
			title: 'O que levar',
			warning: 'Clique e saiba mais!'
		},
		back: {
			title: 'Prepare-se para momentos inesquecíveis!',
			warning: 'Clique e saiba mais!'
		}
	}
	
	return <>
		<CustomCarousel>
      <Carousel autoPlay={true} autoPlaySpeed={5000} infinite={true} responsive={responsivePainel} removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} showDots={true}	swipeable={true} draggable={true} className="custom-slider">
				<img
					src="./images/jpg/painel.jpg"
					alt="Imagem JPG, Jalapão"
				/>
				<img
					src="./images/jpg/painel.jpg"
					alt="Imagem JPG, Jalapão"
				/>
      </Carousel>
		</CustomCarousel>
		
		<Introduction className="section small pb-0">
			<Grid>
				<FlexboxGrid align="middle">
					<Col md={8} mdPush={16} xs={24}>
						{/* <div className="animation">
							<svg width="100%" viewBox="0 0 320px 50px">
								<text y="57px">I</text>
								<AiFillHeart y="0" x="50px"/>
								<text y="57px" x="115px">Jalapão</text>
							</svg>
							<svg width="100%" viewBox="0 0 320px 50px">
								<text y="57px">I</text>
								<AiFillHeart y="0" x="50px"/>
								<text y="57px" x="115px">Jalapão</text>
							</svg>
						</div> */}
						<img src="./images/png/call-to-action.png" alt="Imagem PNG, Mulher extendendo a mão direita em direção a tela"/>
					</Col>
					<Col md={16} mdPull={8} xs={24}>
						<h1 className="titulo"><span>Venha conhecer Jalapão</span></h1>
						<h2>Crie memórias inesquecíveis!</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit itaque sunt ipsum vero doloribus reprehenderit excepturi praesentium placeat nostrum, fuga eum ipsa perferendis deserunt, culpa ipsam fugit beatae! Beatae, vitae. E além de tudo isso, seja acompanhado por um(a) guia profissional super preparado(a) para atender você da melhor maneira possível: com sorrisos e muito carisma, atenção e cuidado com o seu bem-estar para que você tire o maior proveito possível da sua viagem!</p>
						<p><i>O seu sorriso é a nossa satisfação!</i></p>
						<div className="button">
							<Button text="Fale Conosco" textHover="É só clicar!" type="primaryButton"></Button>
						</div>
					</Col>
				</FlexboxGrid>
			</Grid>
		</Introduction>

		<CallToAction>
			<Grid>
				<Row className="flex">
					<Col md={12} xs={24}>
						<div className="background">
							<h2>Confira as nossas próximas saídas!</h2>
							<div className="buttons">
								<Button text="Janeiro" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Janeiro', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Fevereiro" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Fevereiro', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Março" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Março', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Abril" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Abril', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Maio" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Maio', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Junho" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Junho', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Julho" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Julho', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Agosto" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Agosto', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Setembro" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Setembro', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Outubro" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Outubro', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Novembro" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Novembro', 'content': '22/04/2017, 25/04/2017'})}}></Button>
								<Button text="Dezembro" textHover="É só clicar!" type="primaryButton" onClick={() => {handleOpen(); handleData({'title':'Dezembro', 'content': '22/04/2017, 25/04/2017'})}}></Button>
							</div>
						</div>
					</Col>
					<Col md={12} xs={24}>
						<Row>
							<Col sm={12} xs={24}>
								<Link to="/o-que-levar" className="box darker">
									<FlipCard className="box clear" image="./images/jpg/oquelevar.jpg" text={flipDica} />
								</Link>
							</Col>
							<Col sm={12} xs={24}>
								<Link to="/roteiros">
									<FlipCard className="box clear" image="./images/jpg/roteiros.jpg" text={flipRoteiros} />
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</CallToAction>

		<Gallery className="section">
			<Grid>
				<Row>
					<Col xs={24}>
						<h1 className="titulo"><span data-align="center">Galeria</span></h1>
						<SimpleReactLightbox>
							<SRLWrapper>
								<Carousel autoPlay={true} autoPlaySpeed={5000} infinite={false} responsive={responsiveGaleria} removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} showDots={true} renderDotsOutside={true} slidesToSlide={1} swipeable={true} draggable={true}>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
									<a href={indisponivel} className="image">
										<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									</a>
								</Carousel>
							</SRLWrapper>
						</SimpleReactLightbox>
					</Col>
				</Row>
			</Grid>
		</Gallery>

		<Reviews className="section">
			<Grid>
				<Row>
					<Col xs={24}>
						<h1 className="titulo"><span data-align="center">Depoimentos</span></h1>
						<Carousel autoPlay={true} autoPlaySpeed={5000} infinite={true} responsive={responsiveReviews} removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} showDots={true} renderDotsOutside={true} slidesToSlide={1} swipeable={true} draggable={true}>
							<div className="depoimento">
								<div className="body">
									<h2>Nome</h2>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae doloribus placeat cumque nulla nemo, odit, expedita dolorem ipsum iste veniam dicta accusantium. Asperiores corrupti modi, sint distinctio sequi autem provident?</p>
								</div>
								<div className="footer">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									<p>TripAdvisor</p>
								</div>
							</div>
							<div className="depoimento">
								<div className="body">
									<h2>Nome</h2>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae doloribus placeat cumque nulla nemo, odit, expedita dolorem ipsum iste veniam dicta accusantium. Asperiores corrupti modi, sint distinctio sequi autem provident?</p>
								</div>
								<div className="footer">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									<p>TripAdvisor</p>
								</div>
							</div>
							<div className="depoimento">
								<div className="body">
									<h2>Nome</h2>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae doloribus placeat cumque nulla nemo, odit, expedita dolorem ipsum iste veniam dicta accusantium. Asperiores corrupti modi, sint distinctio sequi autem provident?</p>
								</div>
								<div className="footer">
									<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
									<p>TripAdvisor</p>
								</div>
							</div>
						</Carousel>
					</Col>
				</Row>
			</Grid>
		</Reviews>

		<Modal autoFocus={true} show={open} onClose={handleClose} onHide={handleClose} size={'xs'} id="modalDatas">
			<Modal.Header>
				<Modal.Title>{modalData.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{modalData.content}
			</Modal.Body>
		</Modal>
	</>;
}

export default Home;