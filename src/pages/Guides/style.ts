import styled from 'styled-components';
import leaves from '../../assets/images/jpg/leaves-pattern.jpg';

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

	a {
		display: flex;
		margin-bottom: 1.75rem;
	}

	.titulo {
		margin-bottom: 1.75rem;
	}

	.roteiro {
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .15);
		transition: .4s ease-in-out;

		:hover {
			box-shadow: 0 9px 5px 0 rgba(0, 0, 0, .15);
			transform: translateY(-5px);
		}

		.image {
			height: 250px;
    	overflow: hidden;

			img {
				height: 100%;
    		object-fit: cover;
			}
		}

		.info {
			.header {
				background: #F9F9F9;
    		display: flex;

				.name {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: calc(100% - 70px);
					padding: 1rem;

					h2 {
						font-size: 1.5rem;
						font-weight: 600;
						text-transform: uppercase;
					}
				}

				.time {
					background: #DEE2E6;
					text-align: center;
					min-width: 70px;

					h3 {
						font-size: 2.25rem;
					}

					p {
						font-size: 1.15rem;
    				text-transform: uppercase;
					}
				}
			}

			.body {
				padding: 1rem;

				p {
					font-size: 1.15rem
				}
			}
		}
	}

	.rs-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;