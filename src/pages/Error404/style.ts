import styled from 'styled-components';

export const StyledError = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	overflow: hidden;

	h1 {
		font-size: 5rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
	}

	h2 {
		text-align: center;

		a {
			color: #119047;

			:hover {
				opacity: .75;
			}

			svg {
				vertical-align: middle;
			}
		}
	}

	.lottie {
		div {
			width: 100% !important;
			height: auto !important;
		}
	}

	@media screen and (min-width: 1400px) {
		.lottie {
			div {
				width: 70% !important;
			}
		}
	}

	@media screen and (max-width: 767px) {
		h1 {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}

		h2 {
			font-size: 1.35rem;
		}
	}
`;