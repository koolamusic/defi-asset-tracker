import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        /* -----------Make clicks pass-through----------- */
        html,body {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          background: #F7FAFC;
        }
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #00051a;
          position: fixed;
          z-index: 199999939;  /* index to override what is set for sticky nav */
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          z-index: 199999939;  /* index to override what is set for sticky nav */
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px rgba(17, 28, 107, 0.7), 0 0 5px rgba(237, 47, 89, 0.7);
          opacity: 1.0;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); } 
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

    /* vietnamese */
    @font-face {
        font-family: 'Barlow';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/barlow/v5/7cHrv4kjgoGqM7E_Cfs0wH8RnA.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }

      `}
  />
)

export default Fonts
