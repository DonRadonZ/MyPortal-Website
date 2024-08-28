import styled, { css } from "styled-components";

const h1 = css`
    font-size: 3rem;
    font-weight: 600;
`;
const h2 = css`
    font-size: 2.25rem;
    font-weight: 600;
`;
const h3 = css`
    font-size: 2rem;
    font-weight: 500;
`;
const h4 = css`
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
`;
// const h5 = css`
//     font-size: 1.5rem;
//     font-weight: 500;
// `;
// const h6 = css`
//     font-size: 1.25rem;
//     font-weight: 500;
// `;

interface HeadingProp  {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ;
    align?: "left" | "center" | "right";
}

const Heading = styled.h1<HeadingProp>`
    ${props => props.as === 'h1' && h1} 

  ${props => props.as === 'h2' && h2} 

  ${props => props.as === 'h3' && h3} 

  ${props => props.as === 'h4' && h4} 

  line-height: 1.4;

    
`;

Heading.defaultProps = {
    as: "h1",
    align: "left",
}

export default Heading;

