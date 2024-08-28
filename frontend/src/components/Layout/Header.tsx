import styled from "styled-components"
import HeaderMenu from "./HeaderMenu"

const StyledHeader = styled.header`
background-color: #f97316;
padding: 1.2rem 4.8rem;

display: flex;
gap: 2.4rem;
align-items: center;
justify-content: flex-end;
`

export default function Header() {
  return (
    <StyledHeader>
      <HeaderMenu/>
    </StyledHeader>
  )
}
