import styled from "styled-components"

const StyledSidebar = styled.aside`
  background-color: orange;
    padding: 3.2rem 2.4rem;
    

    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

`

export default function Sidebar() {
  return (
    <StyledSidebar>Sidebar</StyledSidebar>
  )
}
