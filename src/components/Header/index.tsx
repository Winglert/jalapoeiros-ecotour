// Components
import React from 'react';
import {Grid, Row, Col, Navbar, Nav} from 'rsuite';
import {Link, NavLink} from 'react-router-dom';
// Images
import logo from '../../assets/images/png/logo.png';
// CSS
import {CustomNavbar} from './style';
// Icons
import { BsPhone, BsList } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header: React.FC = () => {
	const [menuCollapse, setMenuCollapse] = React.useState(false);

	return <>
		<CustomNavbar>
			<div className="header">
				<Grid>
					<Row>
						<Col md={12} xs={24}>
							<p><a href="tel:63991045896"><BsPhone /> (63) 9 9104-5896</a> | <a href="tel:6392253534"><BsPhone /> (63) 9 9225-3534</a> | <a href="tel:63992253534"><BsPhone /> (63) 9 9225-3534</a></p>
						</Col>
						<Col md={12} xs={24}>
							<div className="social">
								<a href="https://www.facebook.com/jalapoeiros.ecotour" target="_blank" rel="noreferrer" title="Facebook"><FaFacebookSquare /> /jalapoeiros.ecotour</a>
								<a href="https://www.instagram.com/jalapoeirosecotour/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram /> @jalapoeirosecotour</a>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
			<Navbar>
				<Navbar.Header>
					<Link to="/" className="rs-navbar-brand"><img src={logo} className="rs-brand" alt="Imagem PNG, Logo - Jalpoleiros Ecotour, I <3 Jalapão"/></Link>
				</Navbar.Header>
				<div className="rs-nav-navigator">
					<div className="whatsapp">
						<a href="https://linktr.ee/ecoturjalapoeiros" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
					</div>
					<button type="button" onClick={(menuCollapse) ? () => setMenuCollapse(false) : () => setMenuCollapse(true)}>
						<BsList />
					</button>
				</div>
				<Navbar.Body className={(menuCollapse) ? "menu-collapse show" : "menu-collapse"}>
					<Nav>
						<Nav.Item eventKey="sobre" componentClass="span" onClick={() => setMenuCollapse(false)}>
							<NavLink to="/sobre" activeClassName="active" className="rs-nav-link">Quem Somos</NavLink>
						</Nav.Item>
						<Nav.Item eventKey="roteiros" componentClass="span" onClick={() => setMenuCollapse(false)}>
							<NavLink to="/roteiros" activeClassName="active" className="rs-nav-link">Roteiros</NavLink>
						</Nav.Item>
						<Nav.Item eventKey="pontos-turisticos" componentClass="span" onClick={() => setMenuCollapse(false)}>
							<NavLink to="/pontos-turisticos" activeClassName="active" className="rs-nav-link">Pontos Turísticos</NavLink>
						</Nav.Item>
						<Nav.Item eventKey="contato" componentClass="span" onClick={() => setMenuCollapse(false)}>
							<NavLink to="/contato" activeClassName="active" className="rs-nav-link">Contato</NavLink>
						</Nav.Item>
					</Nav>
				</Navbar.Body>
			</Navbar>
		</CustomNavbar>
	</>
	;
}

export default Header;