import { useState } from 'react'
import ButtonIcon from '../../components/ui/ButtonIcon'
import { FaBell } from 'react-icons/fa'

export default function Notification() {
  const [showNotifactions, setShowNotifications] = useState(false);

  function toggleNotification(){
    setShowNotifications(!showNotifactions);
  }

  return (
    <ButtonIcon>
        <FaBell />
    </ButtonIcon>
  )
}
