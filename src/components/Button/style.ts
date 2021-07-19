import styled from 'styled-components';

export const CustomButton = styled.button`
	background: transparent;
	border: 0;
	font-size: 1.25rem;
	font-weight: 600;
	text-transform: uppercase;
	vertical-align: middle;
	margin: 0;
	padding: 0;
	position: relative;

	.front, .back {
		line-height: 1.25;
		padding: 0.5rem 1rem;
		transition: .4s ease-in-out;
	}

	.front  {
		transform: translateY(0) rotateX(0);
		transform-origin: top;
		background: ${props => props.theme.background};
		color: ${props => props.theme.color};
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: translateY(-100%) rotateX(90deg);
		transform-origin: bottom;
		background: ${props => props.theme.hover.background};
		color: ${props => props.theme.hover.color};
	}

	:hover {
		.front {
			transform: translateY(100%) rotateX(90deg);
		}

		.back {
			transform: translateY(0) rotateX(0);
		}
	}
`;