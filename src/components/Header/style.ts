import styled from 'styled-components';

export const CustomNavbar = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	background: #FFF;
	z-index: 1000;


	// Header
	.header {
		background: #119047;
    color: #FFF;
    padding: 5px 0;

		p {
			font-size: 1rem;
			text-align: center;
			line-height: 1;

			svg {
				vertical-align: bottom;
			}
		}

		a {
			:hover {
				opacity: .75;
			}
		}

		.social {
			display: flex;
			justify-content: center;
			align-items: center;

			a {
				font-size: 1rem;

				:not(:last-child) {
					margin-right: 1rem;
				}
			}

			svg {
				font-size: 1.25rem;
				vertical-align: top;
			}
		}
		
		@media (max-width: 575px) {
			p {
				display: none;
			}

			.social {
				a {
					font-size: 13px;
				}
			}
		}
	}

	// Navbar
	.rs-navbar {
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		// Header
		.rs-navbar-header {
			height: auto;
			.rs-navbar-brand {
				display: flex;
				.rs-brand {
					width: 185px;
				}
			}
		}
		// Navigator | Buttons
		.rs-nav-navigator {
			display: flex;
    	margin-left: 1rem;

			button {
				background: transparent;
    		line-height: 1;
			}

			svg {
				font-size: 2rem;
				vertical-align: middle;
			}

			.whatsapp {
				line-height: 1;
				border-right: 2px solid #119047;
				margin-right: 0.5rem;
				padding: 0 0.5rem;

				svg {
					color: #119047;
				}
			}
		}
		// Body
		.rs-navbar-body {
			display: flex;
			.rs-nav {
				.rs-nav-item {
					text-align: center;

					.rs-nav-link {
						font-size: 1.25rem;
						font-weight: 600;
						text-transform: uppercase;
						color: #212529;
						padding: 18px 16px;
						position: relative;

						:hover {
							::before {
								background: #D7EA8F;
							}
						}

						::before {
							content: '';
							position: absolute;
							top: 50%;
							left: 50%;
							width: 60%;
							height: 60%;
							background: #EBF5C7;
							transform: translate(-50%, -50%) rotate(5deg);
							transition: .4s ease-in-out;
							z-index: -1;
						}
					}

					.rs-nav-link.active {
						color: #00652B;
					}

					.rs-nav-item-content {
						display: inline-flex;
						line-height: 1;
						padding: 0;

						:hover {
							background: transparent;
							color: inherit;
						}

						.rs-ripple-pond {
							display: none;
						}
					}
				}
			}
		}

		@media (min-width: 992px) {
			.rs-nav-navigator {
				display: none;
			}
		}

		@media (max-width: 991px) {
			.rs-navbar-body {
				max-height: 0;
				overflow: hidden;
				position: absolute;
				top: 100%;
				left: 0;
				right: 0;
				transition: max-height .4s ease-in-out;

				.rs-nav {
					width: 100%;
					ul {
						display: flex;
						flex-direction: column;
						.rs-nav-item {
							.rs-nav-item-content {
								background: #FFF;
								z-index: 0;

								::before {
									width: 90px;
								}
							}
						}
					}
				}
			}

			.rs-navbar-body.show {
				max-height: 224px;
			}
		}
	}
`;