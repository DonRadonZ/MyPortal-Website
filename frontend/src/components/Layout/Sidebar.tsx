import styled from "styled-components"
import MainNav from "../ui/MainNav"

const StyledSidebar = styled.aside`
  background-color: var(--color-gray-0);
    padding: 3.25rem 2.5rem;
    
    border-right: 1px solid var(--color-gray-100);
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    overflow-y: auto;

`

export default function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav/>
    </StyledSidebar>
  )
}
