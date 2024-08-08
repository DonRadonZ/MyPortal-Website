import styled from "styled-components"

const StyledHeader = styled.header`
background-color: red;
padding: 1.2rem 4.8rem;

display: flex;
gap: 2.4rem;
align-items: center;
justify-content: flex-end;
`

export default function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}
