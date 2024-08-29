
import FullCalendar from "@fullcalendar/react"
import styled from "styled-components"
import dayGridPlugin from '@fullcalendar/daygrid';


const StyledCalendar = styled.div`
  width: full;
  border-radius: 0.5rem;
  padding: 2.5rem;
  background-color: var(--color-gray-0);
  position: relative;
  z-index: 0;
`

export default function EventCalendar() {
  return (
    <StyledCalendar>
    <FullCalendar
    plugins={[ dayGridPlugin ]}
    height={773}
    />
    </StyledCalendar>
  )
}
