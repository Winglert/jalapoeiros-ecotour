import styled from 'styled-components';
import leaves from '../../assets/images/jpg/leaves-pattern.jpg';

export const StyledTip = styled.section`
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

	.tips {
		display: flex;
		flex-wrap: wrap;

		.tip {
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

	@media (min-width: 992px) {
		.tips {
			.tip {
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