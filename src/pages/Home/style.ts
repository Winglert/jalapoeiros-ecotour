import styled from 'styled-components';
import leaves from '../../assets/images/jpg/leaves-pattern.jpg';
// export const Container = styled.div`
	
// `;
// Carousel
export const CustomCarousel = styled.section`
	position: relative;
	// Carousel
	.react-multi-carousel-list {
		img {
			height: 50vh; object-fit: cover;
		}

		.react-multi-carousel-dot-list {
			bottom: 1rem;

			.react-multi-carousel-dot {
				:not(:last-child) {
					margin-right: 0.5rem;
				}

				:not(.react-multi-carousel-dot--active) {
					button {
						width: 15px;
					}
				}

				button {
					width: 25px;
					height: 5px;
					background: #FFF;
					border: 0;
					border-radius: 20px;
					margin-right: 0;
					transition: width .4s ease-in-out;
				}
			}
		}
	}
`;
// Call to Action
export const Introduction = styled.section`
	h2 {
		font-size: 1.7rem;
		font-weight: 300;
		font-style: italic;
		color: #727272;
		margin-bottom: 1rem;
	}

	img {
		max-height: 380px;
	}

	.titulo {
		margin-bottom: 0.5rem;
		text-align: left;
	}
	
	.button {
		margin-bottom: 1rem;
	}

	.animation {
		display: flex;
		justify-content: center;
		position: relative;

		.sticker {
			transform: rotate(335deg);
			fill: #000;
			stroke: #000;
    	stroke-width: 20px;

			text {
				font-size: 3vw;
				font-weight: 900;
				fill: #000;
			}

			g {
				animation-name: heartOulinePosition;
				animation-iteration-count: infinite;
				animation-duration: 1s;

				svg {
					font-size: 6rem;
					fill: #000;
					animation-name: heartOuline;
					animation-iteration-count: infinite;
					animation-duration: 1s;
				}
			}
		}

		.sticker-text {
			position: absolute;
			top: 0;
			left: 0;
			fill: #FFF;
			transform: rotate(335deg);

			text {
				font-size: 3vw;
				font-weight: 900;
			}

			g {
				animation-name: heartBeatingPosition;
				animation-iteration-count: infinite;
				animation-duration: 1s;

				svg {
					font-size: 4.5rem;
					fill: #F00;
					animation-name: heartBeating;
					animation-iteration-count: infinite;
					animation-duration: 1s;
				}	
			}
		}

		@keyframes heartBeating {
			from {font-size: 4.5rem;}
			50% {font-size: 5rem;}
			to {font-size: 4.5rem;}
		}

		@keyframes heartBeatingPosition {
			from {transform: translateY(0, 0);}
			50% {transform: translate(-5px, -5px);}
			to {transform: translateY(0, 0);}
		}

		@keyframes heartOuline {
			from {font-size: 6rem;}
			50% {font-size: 6.5rem;}
			to {font-size: 6rem;}
		}

		@keyframes heartOulinePosition {
			from {transform: translateY(0, 0);}
			50% {transform: translate(-5px, -5px);}
			to {transform: translateY(0, 0);}
		}
	}

	@media (max-width: 1199px) {
		.animation {
			.sticker, .sticker-text {
				g {
					svg {
						animation-iteration-count: 0;
					}
				}
			}
		}
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		.animation {
			.sticker {
				g {
					svg {
						font-size: 5rem;
					}
				}
			}

			.sticker-text {
				g {
					svg {
						font-size: 4rem;
					}
				}
			}
		}
	}

	@media (max-width: 991px) {
		img {
			margin-bottom: 1rem;
		}

		.animation {
			.sticker, .sticker-text {
				transform: unset;

				text {
					font-size: 8vw;
				}
			}
		}
	}

	@media (min-width: 768px) and (max-width: 991px) {
		.animation {
			.sticker {
				g {
					transform: translate(-7px,-12px);

					svg {
						font-size: 7rem;
					}
				}
			}

			.sticker-text {
				g {
					transform: translate(-4px,-10px);

					svg {
						font-size: 5.5rem;
					}
				}
			}
		}
	}

	@media (min-width: 576px) and (max-width: 767px) {
		.animation {
			.sticker {
				g {
					transform: translate(4px, 12px);

					svg {
						font-size: 5rem;
					}
				}
			}

			.sticker-text {
				g {
					transform: translate(7px,13px);

					svg {
						font-size: 3.5rem;
					}
				}
			}
		}
	}

	@media (max-width: 575px) {
		.animation {
			.sticker, .sticker-text {
				text {
					font-size: 8vw;
				}
			}

			.sticker {
				g {
					transform: translate(10px, 25px);

					svg {
						font-size: 4rem;
					}
				}
			}

			.sticker-text {
				g {
					transform: translate(8.5px,22px);

					svg {
						font-size: 3rem;
					}
				}
			}
		}
	}
`;

export const CallToAction = styled.section`
	background: url('./images/jpg/call-to-action.jpg');
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	padding: 90px 0;
	position: relative;
	z-index: 0;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .35);
		z-index: -1;
	}

	.background {
		border-radius: 10px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .35);
		padding: 15px;
		position: relative;
		z-index: 0;

		::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(57.23% 149.59% at 48.75% 49.84%, rgba(207, 205, 205, 0.62) 0%, rgba(255, 255, 255, 0) 100%);
			border-radius: 10px;
			filter: blur(5px);
			z-index: -1;
		}

		h2 {
			font-weight: 900;
			text-align: center;
			text-transform: uppercase;
			color: #FFF;
			margin-bottom: 1rem;
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			button {
				box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .75);
				min-width: 150px;
				margin-right: 0.5rem;
				margin-bottom: 1rem;
			}
		}
	}

	.box.clear {
		.overlay {
			background: radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .25));
		}
	}

	.box.darker {
		.overlay {
			background: radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .75));
		}
	}

	.rs-row.flex {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	@media (max-width: 991px) {
		.background {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 575px) {
		.background {
			.buttons {
				button {
					min-width: unset; width: 120px;

					.back {
						font-size: 16px;
						line-height: 1.9;
					}
				}
			}
		}
	}

	@media (min-width: 366px) and (max-width: 575px) {
		.background {
			.buttons {
				button {
					min-width: unset; width: 145px;
				}
			}
		}
	}

	@media (max-width: 480px) {
		.box.darker {
			margin-bottom: 1rem;
		}
	}
`;

// Galeria
export const Gallery = styled.section`
	.titulo {
		margin-bottom: 1.75rem;
	}

	.image {
		height: 250px;
		border-radius: 10px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);
		cursor: pointer;
		margin: 5px 15px;
		overflow: hidden;
		display: flex;

		img {
			height: 100%;
			object-fit: cover;
			transition: .4s ease-in-out;
		}

		:hover {
			img {
				transform: scale(1.2);
			}
		}
	}

	.react-multi-carousel-dot-list {
		bottom: calc(-1rem + -20px);

		.react-multi-carousel-dot {
			:not(:last-child) {
				margin-right: 0.5rem;
			}

			:not(.react-multi-carousel-dot--active) {
				button {
					width: 15px;
				}
			}

			button {
				width: 25px;
				height: 5px;
				background: #119047;
				border: 0;
				border-radius: 20px;
				margin-right: 0;
				transition: width .4s ease-in-out;
			}
		}
	}
`;

export const Reviews = styled.section`
	border-top: 1px solid #DEE2E6;
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
		margin-bottom: calc(1.75rem - 10px);
	}

	.depoimento {
		background: #F1FFF1;
    border-radius: 10px;
		margin: 10px 15px;

		.body {
			padding: 1rem;

			h2 {
				font-size: 1.35rem;
				font-weight: 600;
				text-transform: uppercase;
				margin-bottom: 0.25rem;
			}

			p {
				font-size: 1.1rem;
				font-style: italic;
			}
		}

		.footer {
			display: flex;
			align-items: start;
			padding: 0 15px;

			img {
				width: 60px;
				height: 60px;
				object-fit: cover;
				border: 5px solid #f9f9f9;
				border-radius: 100%;
				box-sizing: content-box;
				margin: -15px 0 -20px -2vw;
			}

			p {
				font-size: 1rem;
    		color: #767676;
			}
		}
	}

	.react-multi-carousel-dot-list {
		bottom: calc(-1rem + -10px);

		.react-multi-carousel-dot {
			:not(:last-child) {
				margin-right: 0.5rem;
			}

			:not(.react-multi-carousel-dot--active) {
				button {
					width: 15px;
				}
			}

			button {
				width: 25px;
				height: 5px;
				background: #119047;
				border: 0;
				border-radius: 20px;
				margin-right: 0;
				transition: width .4s ease-in-out;
			}
		}
	}
`;