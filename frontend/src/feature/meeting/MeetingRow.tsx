
import { Table } from '../../components/ui/Table';
import styled from 'styled-components'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi2';
import Menus from '../../components/ui/Menus';



const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
`

type MeetingRowProps = {
    meeting:{
        id: string;
      title: string;
      room: string;
      booker: string;
      date: string;
      created_at: string;
      banquet: string;
      status: string;
    }
}

export default function MeetingRow({meeting:{
    id: meetingId,
    title,
    room,
    booker,
    date,
    created_at,
    banquet,
    status
}}: MeetingRowProps) {
  return (
    <Table.Row>
        <Title>{title}</Title>
        <span>{room}</span>
        <span>{booker}</span>
        <span>{date}</span>
        <span>{created_at}</span>
        <span>{banquet}</span>
        <span>{status}</span>
        <Menus.Menu>
            <Menus.Toggle id={meetingId}/>
            <Menus.List id={meetingId}>
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
