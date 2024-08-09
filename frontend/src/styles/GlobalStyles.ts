import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
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
}
`

export default GlobalStyles