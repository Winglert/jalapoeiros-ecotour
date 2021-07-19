import styled from 'styled-components';
import leaves from '../../assets/images/jpg/leaves-pattern.jpg';

export const GuideOpenning = styled.section`
	overflow: hidden;

	img {
		width: calc(100% + 30px);
		height: 350px;
		object-fit: cover;
		margin: 0 -15px;
	}
`

export const StyledGuide = styled.section`
	position: relative;
	z-index: 0;

	::before, ::after {
		content: '';
		position: absolute;
		top: 0;
		background: url(${leaves});
		background-repeat: no-repeat;
		width: 50%;
		height: 100%;
		opacity: .25;
		z-index: -1;
	}

	::before {
		left: 0;
	}

	::after {
		right: 0;
		transform: scaleX(-1);
	}

	.titulo {
		margin-bottom: 1.75rem;
	}

	.titulo.special {
		margin-bottom: 0.25rem;
		margin-top: 1rem;
	}

	.small {font-size: 1.15rem; text-align: center; color: #767676; margin-bottom: 1.75rem;}

	.roteiros {
		display: flex;
		flex-wrap: wrap;

		.roteiro-do-dia {
			width: 100%;
			flex: 0 1 100%;
			box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);
			margin-bottom: 1.75rem;
			padding: 1rem;
			position: relative;
			z-index: 0;

			::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: .15;
				z-index: -1;
			}

			:nth-child(odd) {
				::before {
					background: url('../images/jpg/dunes.jpg');
					background-size: contain;
					background-repeat: no-repeat;
					background-position: right;
				}
			}

			:nth-child(even) {
				::before {
					background: url('../images/png/waterfall.png');
					background-size: contain;
					background-repeat: no-repeat;
					background-position: right;
				}
			}

			.header {
				border-bottom: 1px solid #119047;
				margin-bottom: 1rem;
				padding-bottom: 0.25rem;

				h2 {
					font-size: 1.65rem;
					text-transform: uppercase;
				}
			}
		}
	}

	.mais-informacoes {
		display: flex;
		flex-wrap: wrap;

		.info {
			width: 100%;
			flex: 0 1 100%;
			padding: 1rem;
			position: relative;
			z-index: 0;

			h2 {
				font-size: 1.65rem;
				text-transform: uppercase;
				margin-bottom: 0.25rem;
				svg {
					font-size: 1.25rem;
					vertical-align: middle;
					transform: translateY(-2px) rotate(90deg);
					color: #119047;
				}
			}
		}
	}

	.align-center {
		display: flex;
		justify-content: center;

		a {
			:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}

	@media (min-width: 992px) {
		.roteiros {
			.roteiro-do-dia {
				width: calc(50% - 30px);
				flex: 0 1 calc(50% - 30px);

				:nth-child(odd) {
					margin-right: 30px;

					::before {
						background-size: 50%;
					}
				}
				:nth-child(even) {
					margin-left: 30px;
				}
			}
		}

		.mais-informacoes {
			.info {
				width: calc(50% - 30px);
				flex: 0 1 calc(50% - 30px);

				:nth-child(odd) {
					margin-right: 30px;
				}
				:nth-child(even) {
					margin-left: 30px;
				}
			}
		}
	}
`;