
import { Table } from '../../components/ui/Table';
import styled from 'styled-components'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi2';
import Menus from '../../components/ui/Menus';

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
`

type ClassRowProps = {
    classroom:{
    id: string;
    created_at: string;
    title: string;
    room: string;
    booker: string;
    date: string;
    status: string;}
}

function ClassRow({classroom:{
    id: reservationId,
    created_at,
    title,
    room,
    booker,
    date,
    status
}}:ClassRowProps) {
  return (
    <Table.Row>
        <Title>{title}</Title>
        <span>{room}</span>
        <span>{booker}</span>
        <span>{date}</span>
        <span>{created_at}</span>
        <span>{status}</span>
        <Menus.Menu>
            <Menus.Toggle id={reservationId}/>
                <Menus.List id={reservationId}>
                    <Menus.Button
                    icon={<HiEye/>}
                    >
                        See Detail
                    </Menus.Button>
                    <Menus.Button
                    icon={<HiPencil/>}
                    >
                     Edit   
                    </Menus.Button>
                    <Menus.Button
                    icon={<HiTrash/>}
                    >
                     Delete  
                    </Menus.Button>
                </Menus.List>
        </Menus.Menu>
    </Table.Row>
  )
}

export default ClassRow