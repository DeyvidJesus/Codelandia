import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --green: #5C913B;
        --yellow: #FFA200;
        --red: #CF3031;
        --pink: #FFD4C9;

        --white: #FEF6F4;
        --gray: #616161;
        --gray-200: #2E2E2E;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--white);
        color: var(--gray-200);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Sora', sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    footer {
        padding: 1rem;
        background-color: #FFF;
        p {
            text-align: center;
        }
    }
`