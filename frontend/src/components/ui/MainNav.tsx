import React from 'react'
import styled from 'styled-components'

const NavList = styled.ul`
    display: flex
`

const NAV_LIST_DATA = [
    {
        to:"/service",
        label: "Service"
    },
    {
        to: "/dashboard",
        label: "Dasnboard"
    },
    {
        to: "/"
    }
]

const NAV_LIST_HELP = [
    {
        to: "/document",
        label: "Document"
    },
    {
        to: "/knowledge-base",
        label: "Knowledge Base"
    },
    {
        to: "/Support",
        label: "Support"
    }
]

export default function MainNav() {
  return (
    <nav>
        <NavList>

        </NavList>
    </nav>
  )
}
