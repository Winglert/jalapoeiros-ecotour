import styled from 'styled-components';

export const StyledLoader = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	background: #EFFBF4;
	z-index: 9999999999999999999;

	h1 {
    position: absolute;
    top: calc(50% + 140px);
    transform: translateY(-50%);
	}

	.lottie {
		div {
			width: 100% !important;
			height: auto !important;

			svg {
				height: auto;
			}
		}
	}
`;