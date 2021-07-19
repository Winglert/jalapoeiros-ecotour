import styled from 'styled-components';

export const FooterContato = styled.section`
	background: #119047;
  color: #FFF;
	text-align: center;

	h2 {
		font-size: 1.75rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	a {
		vertical-align: middle;

		:hover {
			opacity: .75;
		}

		:not(:last-child) {
			margin-bottom: 1rem;
		}

		svg {
			vertical-align: middle;
		}
	}

	.social {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		a {
			font-size: 1.25rem;

			svg {
				font-size: 2rem;
			}
		}
	}

	.small {
		font-size: 1.15rem;
	}

	@media (max-width: 991px) {
		p {
			margin-bottom: 1rem;
		}
	}
`;