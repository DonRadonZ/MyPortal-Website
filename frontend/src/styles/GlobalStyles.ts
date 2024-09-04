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

        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        --color-green-700: #15803d;

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shaodw-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        --image-grayscale: 0;
        --image-opacity: 100%;
    }

    /* orange */

    --color-brand-50: #fff7ed;
    --color-brand-100: #ffedd5;
    --color-brand-200: #fed7aa;
    --color-brand-300: #fdba74;
    --color-brand-400: #fb923c;
    --color-brand-500: #f97316;
    --color-brand-600: #ea580c;
    --color-brand-700: #c2410c;
    --color-brand-800: #9a3412;
    --color-brand-900: #7c2d12;


    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
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