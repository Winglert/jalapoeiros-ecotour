import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background: url('./images/jpg/soil-texture.jpg');
	color: #FFF;
	padding: 5px 0;
	position: relative;
	z-index: 0;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		z-index: -1;
	}

	p {
		font-size: 1rem;
		text-align: center;
	}

	img {
		width: 80px;
    height: auto;
    position: absolute;
    top: -52px;
    left: 0;
		animation-name: movingJeep;
		animation-iteration-count: infinite;
		animation-duration: 20s;
	}

	@keyframes movingJeep {
		from {
			transform: translateX(0);
		}

		85% {
			opacity: 1;
		}

		to {
			transform: translateX(calc(100vw - 80px));
			opacity: 0;
		}
	}

	@media (max-width: 575px) {
		img {
			animation-duration: 10s;
		}
	}
`;