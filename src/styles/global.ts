import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Tajawal', sans-serif;
    font-size: 14px;
    color: #212529;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: .4s ease-in-out;
  }

  a:hover {
    color: inherit;
    text-decoration: unset;
  }

  a:focus {
    color: inherit;
  }

  p {
    font-size: 1.25rem;
  }

  p + p {
    margin-top: 0;
  }

  p:not(:last-child) {
    margin-bottom: 1rem;
  }

  ul, li {
    list-style: none;
    margin: 0;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
    vertical-align: middle;
  }

  .titulo {
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;

    span {
      display: inline-flex;
      padding-top: 0.5rem;
      position: relative;

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #EEE;
      }

      ::after {
        content: '';
        position: absolute;
        top: -3px;
        left: 0;
        width: 25%;
        min-width: 50%;
        height: 3px;
        background: #10AF53;
      }
    }

    span[data-align="center"] {
      ::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .section {
    padding: 45px 0;
  }

  .section.inner {
    border-top: 1px solid #DEE2E6;
    min-height: calc(100vh - 151.73px - 238px - 32px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pb-0 {
    padding-bottom: 0;
  }

  /* Modal Fixes */
	#modalDatas {
		.rs-modal-header {
			.rs-modal-title {
				font-size: 1.5rem;
				font-weight: 900;
				text-transform: uppercase;
			}

      .rs-modal-header-close {
        font-size: 1rem;
        position: absolute;
        top: 5px;
        right: 1px;
        width: auto;
        line-height: 1;
      }
		}

		.rs-modal-body {
			font-size: 1.25rem;
			margin-top: 1rem;
			padding-bottom: 0px;
		}
	}

  .rs-col-xs-1,
  .rs-col-sm-1,
  .rs-col-md-1,
  .rs-col-lg-1,
  .rs-col-xs-2,
  .rs-col-sm-2,
  .rs-col-md-2,
  .rs-col-lg-2,
  .rs-col-xs-3,
  .rs-col-sm-3,
  .rs-col-md-3,
  .rs-col-lg-3,
  .rs-col-xs-4,
  .rs-col-sm-4,
  .rs-col-md-4,
  .rs-col-lg-4,
  .rs-col-xs-5,
  .rs-col-sm-5,
  .rs-col-md-5,
  .rs-col-lg-5,
  .rs-col-xs-6,
  .rs-col-sm-6,
  .rs-col-md-6,
  .rs-col-lg-6,
  .rs-col-xs-7,
  .rs-col-sm-7,
  .rs-col-md-7,
  .rs-col-lg-7,
  .rs-col-xs-8,
  .rs-col-sm-8,
  .rs-col-md-8,
  .rs-col-lg-8,
  .rs-col-xs-9,
  .rs-col-sm-9,
  .rs-col-md-9,
  .rs-col-lg-9,
  .rs-col-xs-10,
  .rs-col-sm-10,
  .rs-col-md-10,
  .rs-col-lg-10,
  .rs-col-xs-11,
  .rs-col-sm-11,
  .rs-col-md-11,
  .rs-col-lg-11,
  .rs-col-xs-12,
  .rs-col-sm-12,
  .rs-col-md-12,
  .rs-col-lg-12,
  .rs-col-xs-13,
  .rs-col-sm-13,
  .rs-col-md-13,
  .rs-col-lg-13,
  .rs-col-xs-14,
  .rs-col-sm-14,
  .rs-col-md-14,
  .rs-col-lg-14,
  .rs-col-xs-15,
  .rs-col-sm-15,
  .rs-col-md-15,
  .rs-col-lg-15,
  .rs-col-xs-16,
  .rs-col-sm-16,
  .rs-col-md-16,
  .rs-col-lg-16,
  .rs-col-xs-17,
  .rs-col-sm-17,
  .rs-col-md-17,
  .rs-col-lg-17,
  .rs-col-xs-18,
  .rs-col-sm-18,
  .rs-col-md-18,
  .rs-col-lg-18,
  .rs-col-xs-19,
  .rs-col-sm-19,
  .rs-col-md-19,
  .rs-col-lg-19,
  .rs-col-xs-20,
  .rs-col-sm-20,
  .rs-col-md-20,
  .rs-col-lg-20,
  .rs-col-xs-21,
  .rs-col-sm-21,
  .rs-col-md-21,
  .rs-col-lg-21,
  .rs-col-xs-22,
  .rs-col-sm-22,
  .rs-col-md-22,
  .rs-col-lg-22,
  .rs-col-xs-23,
  .rs-col-sm-23,
  .rs-col-md-23,
  .rs-col-lg-23,
  .rs-col-xs-24,
  .rs-col-sm-24,
  .rs-col-md-24,
  .rs-col-lg-24 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .rs-grid-container-fluid {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .rs-grid-container {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .rs-row {
    margin-left: -15px;
    margin-right: -15px;
  }

  @media (min-width: 480px) {
    .rs-grid-container {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .rs-grid-container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .rs-grid-container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .rs-grid-container {
      width: 100%;
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .rs-grid-container {
      width: 100%;
      max-width: 1140px;
    }
  }

  @media (min-width: 1400px) {
    .section:not(.small) {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    .rs-grid-container {
      max-width: 1320px;
    }
  }
`;