import React from 'react';
// Components
import {Col, Grid, Row} from 'rsuite';
// CSS
import { StyledTip } from './style';
// Icons
import { BsFillCapslockFill } from 'react-icons/bs';

const Tips: React.FC = () => {
	function toTop() {
		window.scrollTo(0, 0);
	}
	
	return <>
		{toTop()}
		
		<StyledTip className="section inner">
			<Grid>
				<Row>
					<Col xs={24}>
						<h1 className="titulo"><span data-align="center">O que levar?</span></h1>
						<div className="tips">
							<div className="tip">
								<h2><BsFillCapslockFill /> O que levar de uma forma geral?</h2>
								<p>
									1. Roupas leves e coloridas <br/>
									2. Roupas de banho <br/>
									3. Calçados leves e chinelo <br/>
									4. Chapéu, boné e óculos de sol <br/>
									5. Protetor solar, hidratante e repelente <br/>
									6. Toalhas de secagem rápida <br/>
									7. Mochila de ataque <br/>
									8. Leve só um casaquinho
								</p>
							</div>
							<div className="tip">
								<h2><BsFillCapslockFill /> Sobre medicamentos, é bom se preparar?</h2>
								<p>
									Sabemos que se medicar por conta própria não é certo, maaas, como lá é um destino meio extremo e que você não vai ter acesso fácil a uma farmácia, eu recomendo levar algumas coisas: <br/>
									<i>Remédios para dores musculares, para dor de cabeça, dor de barriga… leve também band-aid e o que mais achar necessário ou que você tome com frequência.</i>
								</p>
							</div>
							<div className="tip">
								<h2><BsFillCapslockFill /> O que levar para as trilhas?</h2>
								<p>
									1. Roupas para trilhas <br/>
									2. Papetes ou calçados para molhar: é obrigatório para rafting
								</p>
							</div>
							<div className="tip">
								<h2><BsFillCapslockFill /> O que levar de itens básicos e pessoais?</h2>
								<p>É interessante levar seus produtos de higiene, como shampoo, sabonete e tudo mais, pois, se tiver no hotel, vai ser dos mais simples.</p>
							</div>
							<div className="tip">
								<h2><BsFillCapslockFill /> E sobre aparelhos eletrônicos, o que devo levar?</h2>
								<p>
									1. Câmera e Celular <br/>
									2. Câmera à prova d’água <br/>
									3. Dome: falando em GoPRO, o Dome é um acessório bastante usado nos atrativos do Jalapão <br/>
									4. Powerbank / bateria externa <br/>
									5. Drone <br/>
									6. Chip da Claro: sério, e isso não é propaganda. Internet no Jalapão é coisa rara, mas, quando funcionada melhor, é pra quem tem chip da Claro. <br/>
									7. óculos de mergulho ou até mesmo um snorkel.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		</StyledTip>
	</>;
}

export default Tips;