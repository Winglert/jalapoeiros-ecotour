import styled from 'styled-components';
import leaves from '../../assets/images/jpg/leaves-pattern.jpg';

export const StyledAttraction = styled.section`
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
		margin-bottom: 2rem;
	}

	.hidden {
		width: 0;
		height: 0;
		overflow: hidden;
	}

	.flip-attraction {
		margin-bottom: 1.75rem;

		.overlay {
			cursor: pointer;
		}
	}
`;