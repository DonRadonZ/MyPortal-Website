import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

    &, &.light-mode {
        --color-gray-0: #fff;
        --color-gray-50: #f9fafb;
        --color-gray-100: #f3f4f6;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #9ca3af;
        --color-gray-600: #4b5563;
        --color-gray-700: #374151;
        --color-gray-800: #1f2937;
        --color-gray-900: #111827;
    }


    --color-brand-600: #ea580c;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%
}

body{
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: "Sarabun", sans-serif;
    transition: color 0.3s, background-color 0.3s;
    display: grid;
}

input-security,
button,
textarea,
select {
    font: inherit;
    color: inherit;
}

button {
    cursor: pointer;
}

*:disabled {
    cursor: not-allowed;
}

select:disabled,
input:disabled {
    background-color: var(--color-gray-200);
    color: var(--color-gray-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6
img{
    max-width: 100%;
}
`

export default GlobalStyles