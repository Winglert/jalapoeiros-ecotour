import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
// Components
import {Link, useParams} from 'react-router-dom'
import {Col, Grid, Row} from 'rsuite';
import Button from '../../components/Button';
import Preloader from '../../components/Preloader';
// CSS
import { StyledGuide, GuideOpenning } from './style';
// Icons
import { BsFillCapslockFill } from "react-icons/bs";
// Images
import indisponivel from '../../assets/images/jpg/indisponivel.jpg';
// JSON
import jsonRoteiros from '../../json/roteiros.json';

interface Params {
	id : string
}

interface DiaProps {
	hora: string,
	roteiro: string
}

interface DataProps {
	id: string,
	nome: string,
	dias: DiaProps[]
}

const Guide: React.FC = () => {
	function toTop() {
		window.scrollTo(0, 0);
	}

	const {id} = useParams<Params>();
	const [data, setData] = useState<DataProps>({} as DataProps);

	useEffect(() => {
		const roteiro = jsonRoteiros.filter(roteiro => roteiro.id === id)[0];
		setData(roteiro);
	}, [id]);

	if (!data.dias)
		return <Preloader />;

	return <>
		{toTop()}

		<GuideOpenning>
			<Grid fluid={true}>
				<Row>
					<Col xs={24}>
						<img src={indisponivel} alt="Imagem JPG, Uma câmera sobre um texto. O texto está escrito 'Imagem Indisponível'"/>
					</Col>
				</Row>
			</Grid>
		</GuideOpenning>
		<StyledGuide className="section inner">
			<Grid>
				<Row>
					<Col xs={24}>
						<h1 className="titulo"><span data-align="center">{data.nome}</span></h1>
						<div className="roteiros">
							{
								data.dias.map((dia, index) => (
									<div className="roteiro-do-dia" key={index}>
										<div className="header">
											<h2>{index+1}° Dia</h2>
										</div>
										<div className="body">
											<p><b>Horário de Saida:</b> {dia.hora}</p>
											<p><b>Locais do Passeio:</b></p>
											<p>
												{ReactHtmlParser(dia.roteiro)}
											</p>
										</div>
									</div>
								))
							}
						</div>
						<div className="mais-informacoes">
							<div className="info">
								<h2><BsFillCapslockFill /> O que está incluso no Roteiro?</h2>
								<p>
									&bull; Transporte veiculo 4x4 <br/>
									&bull; Guia - condutor de Turismo <br/>
									&bull; Hospedagem em pousada com Ar condicionado (quarto duplo/triplo) <br/>
									&bull; Refeições (exceto bebidas) <br/>
									&bull; Taxas de visitação dos atrativos <br/>
									&bull; Água Mineral durante o deslocamento
								</p>
							</div>
							<div className="info">
								<h2><BsFillCapslockFill /> O que não está incluso no Roteiro:</h2>
								<p>
									&bull; Bebidas: alcolicas, sucos, refrigerantes ou água mineral, durante as refeições; <br/>
									&bull; Despesas de uso pessoal; <br/>
									&bull; Passagem aérea; <br/>
									&bull; Hospedagem e refeição em Palmas; <br/>
									&bull; Despesas extras com consumo de frigobar
								</p>
							</div>
							<div className="info">
								<h2><BsFillCapslockFill /> Opcionais não inclusos:</h2>
								<p>
									&bull; Rafting - R$ 200,00 <br/>
									&bull; Trilha do Espírito Santo - R$ 150,00 <br/>
									&bull; Boia Cross - R$ 10,00 <br/>
									&bull; Tirolesa - R$ 50,00 <br/>
									&bull; Morro do Sereno - R$ 150,00 <br/>
									&bull; Morro do Jacurutu - R$ 130,00
								</p>
							</div>
						</div>
						<h3 className="titulo special">Ficou interessado? Entre em contato conosco agora mesmo!</h3>
						<p className="small">Ou procure por um roteiro que te agrade mais! Temos diversas opções.</p>
						<div className="align-center">
							<a href="https://linktr.ee/ecoturjalapoeiros" target="blank" rel="noreferrer">
								<Button text="Fale Conosco" textHover="É só clicar!" type="primaryButton"></Button>
							</a>
							<Link to="/roteiros">
								<Button text="Veja mais roteiros" textHover="É só clicar!" type="secondaryButton"></Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Grid>
		</StyledGuide>
	</>;
}

export default Guide;