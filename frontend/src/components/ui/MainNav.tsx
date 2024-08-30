
import styled from 'styled-components'
import NavListItem from './NavListItem'
import { FaAngleDown, FaAngleUp, FaBook, FaCalendar, FaHandHoldingHeart, FaHome, FaQuestionCircle } from 'react-icons/fa'
import { HiDocument, HiEnvelope, HiInbox } from 'react-icons/hi2'

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

const NAV_LIST_DATA = [
    {
        to:"/service",
        label: "Service",
        icon: <FaHandHoldingHeart />
    },
    {
        to: "/dashboard",
        label: "Dasnboard",
        icon: <FaHome />
    },
    {
        to: "/calendar",
        icon: <FaCalendar/>,
        label: "Calendar"
    },
    {
        to: "/reservation",
      label: "Reservation",
      icon:  <HiInbox />,
      iconClosed:  <FaAngleDown />,
      iconOpened: <FaAngleUp />,
      subNav: [
        {
            to: "/classroom",
            label: "Classroom"
        },
        {
            to: "/meeting",
            label: "Meeting"
        }
      ]
    },
    {
      to: "/tracking",
      label: "Tracking",
      icon:  <HiEnvelope />,
      iconClosed:  <FaAngleDown />,
      iconOpened: <FaAngleUp />,
      subNav: [
        {
            to: "/form",
            label: "Form"
        },
        {
            to: "/mail",
            label: "Mail/Parcel"
        }
      ]
    }
]

const NAV_LIST_HELP = [
    {
        to: "/document",
        icon: <HiDocument />,
        label: "Document"
    },
    {
        to: "/knowledgebase",
        icon: <FaBook />,
        label: "Knowledge Base"
    },
    {
        to: "/support",
        icon:<FaQuestionCircle />,
        label: "Support"
    }
]

export default function MainNav() {
  return (
    <nav>
        <NavList>
            {NAV_LIST_DATA.map((item) => (
                <NavListItem 
                key={item.to} 
                to={item.to}
                icon={item.icon} 
                label={item.label}
                subNav = {item.subNav}
                iconClosed={item.iconClosed}
                iconOpened={item.iconOpened}
                />
            ))}
            <h3>Help</h3>
            {NAV_LIST_HELP.map((item) => (
                <NavListItem
                    key={item.to}
                    icon={item.icon}
                    to={item.to}
                    label={item.label}
                    subNav={undefined} iconClosed={undefined} iconOpened={undefined}                />
            ))}
        </NavList>
    </nav>
  )
}
