import styled from 'styled-components';

export const StyledContact = styled.section`
	background: #000;
	border-top: 1px solid #DEE2E6;
	min-height: calc(100vh - 151.73px - 32px);
	position: relative;
	z-index: 0;
	display: flex;
	align-items: center;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url('../images/jpg/contato.jpg');
		background-size: cover;
		background-position: bottom;
		opacity: .75;
		z-index: -1;
	}

	.background {
		background: linear-gradient(45deg, transparent, rgba(255, 255, 255, .25), transparent);
		border-radius: 10px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .35);
		color: #FFF;
		padding: 15px;

		h2 {
			font-size: 1.5rem;
			font-weight: 300;
			font-style: italic;
			margin-bottom: 1.25rem;
		}

		h3 {
			font-size: 1.5rem;
			text-transform: uppercase;
			margin-bottom: 0.25rem;

			svg {
				vertical-align: middle;
				color: #10AF53;
			}
		}

		a:hover {
			color: #10AF53;
		}

		label {
			font-size: 1.25rem;
			font-weight: 600;
			text-transform: uppercase;
			margin-bottom: 0.25rem;
		}

		.titulo {
			text-align: left;
			margin-bottom: 0.25rem;
		}

		.social {
			display: flex;
			flex-direction: column;

			a {
				font-size: 1.25rem;
				
				svg {
					font-size: 1.5rem;
					vertical-align: middle;
				}
			}
		}
	}

	.form-control {
		border: 1px solid #DEE2E6;
		line-height: 1.5;
		margin-bottom: 1rem;
		padding: 0.375rem 1rem;
		width: 100%;
	}

	.align-center {
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 1199px) {
		.background {
			margin-bottom: 1.75rem;
		}
	}
`;