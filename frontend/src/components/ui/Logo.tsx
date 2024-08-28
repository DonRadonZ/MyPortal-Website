import styled from "styled-components";

const StyledLogo = styled.div`
    text-align: center;
`

const Img = styled.h1`
    font-size: 4.8rem;
`


function Logo() {
  return (
    <StyledLogo>
        <Img>KMUTT</Img>
    </StyledLogo>
  )
}

export default Logo