import { useState } from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-gray-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-gray-800);
        background-color: var(--color-gray-50);
        border-radius: var();

    }
    & svg{
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-gray-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }
`

const DropdownLink = styled(NavLink)`
    display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-gray-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
`



type NavListItemProp = {
    to: any;
    icon: any;
    label: string;
    subNav: any;
    iconClosed: any;
    iconOpened: any;
}

export default function NavListItem({to, icon,label, subNav, iconClosed, iconOpened}: NavListItemProp) {
    const [subnav, setSubnav] = useState(false);

    function showSubNav(e: { preventDefault: () => void; }) {
        setSubnav(!subnav);
        e.preventDefault();
    }

    
  return (
    <>
    <li>
    <StyledNavLink to={to} key={label} onClick={subNav && showSubNav}>
        {icon}
        <span>{label}</span>
        {subNav && subnav ? iconOpened : subNav ? iconClosed: null}
    </StyledNavLink>
    {subnav && subNav.map((item: any) => (
        
            <DropdownLink to={item.to} key={item.label}>
                {item.label}
            </DropdownLink>
        )
    )}
    </li>
    </>
  )
}
