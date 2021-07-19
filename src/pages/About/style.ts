import styled from 'styled-components';
import leaves from '../../assets/images/jpg/leaves-pattern.jpg';

export const StyledAbout = styled.section`
	position: relative;

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

	h2 {
		font-size: 1.25rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #767676;
    margin-bottom: 0.25rem;
	}

	h3 {
		font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
    display: flex;

		svg {
			color: #119047;
			margin-right: 0.35rem;
			vertical-align: middle;
		}
	}

	.titulo:not(.centered) {
		text-align: left;
		margin-bottom: 0.5rem;
	}

	.titulo.centered {
		margin: 2rem 0 1.75rem 0;
	}

	.principal {
		height: 735px;
		border-radius: 10px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .35);
		object-fit: cover;
	}

	.align-center {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	
	.membro {
		border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
    overflow: hidden;

		.image {
			height: 250px;
    	overflow: hidden;

			img {
				height: 100%;
    		object-fit: cover;
			}
		}

		.info {
			text-align: center;
    	padding: 1rem;

			h4 {
				font-size: 1.5rem;
				text-transform: uppercase;
				margin-bottom: 0.5rem;
			}

			a {
				color: #119047;

				:hover {
					opacity: .65;
				}
			}
		}
	}

	@media (max-width: 1199px) {
		.membro {
			margin-bottom: 1.75rem;
		}
	}

	@media (max-width: 991px) {
		.principal {height: auto; max-height: 450px; margin-bottom: 1.75rem;}
	}
`;