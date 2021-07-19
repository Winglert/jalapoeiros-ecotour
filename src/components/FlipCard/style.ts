import styled from 'styled-components';

export const StyledFlipCard = styled.div`
	border-radius: 10px;
	display: flex;
	height: 300px;
	overflow: hidden;
	perspective: 1000px;

	:hover {
		.wrapper {
			transform: rotateY(180deg);
		}
	}

	img {
		height: 100%;
		object-fit: cover;
		filter: blur(1px);
	}

	.wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform .8s ease-in-out;
		transform-style: preserve-3d;

		.front, .back {
			position: absolute;
			width: 100%;
			height: 100%;
			box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .75);
			backface-visibility: hidden;
			perspective: 1000px;
		}

		.back {
			transform: rotateY(180deg);
			overflow: hidden;

			img {
				filter: blur(7px);
			}
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #FFF;
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		h2 {
			font-weight: 900;
			text-transform: uppercase;
			text-shadow: 0 1px 5px #000;
			margin-bottom: 0.5rem;
			transform: translateZ(100px);
		}

		p {
			font-size: 12px;
			text-transform: uppercase;
			color: #D3D3D3;
		}
	}
`;