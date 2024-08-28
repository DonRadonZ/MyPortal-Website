import styled from "styled-components"
import Logout from "../../feature/authentication/Logout"
import Notification from "../../feature/notification/Notification"
import UserAvatar from "../../feature/authentication/UserAvatar"

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`

export default function HeaderMenu() {
  return (
    <StyledHeaderMenu>
        <li>
            <UserAvatar/>
        </li>
        <li>
            <Notification/>
        </li>
        <li>
            <Logout/>
        </li>
    </StyledHeaderMenu>
  )
}
