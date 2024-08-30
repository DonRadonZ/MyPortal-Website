
import { Table } from '../../components/ui/Table';
import styled from 'styled-components'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi2';

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
`

type ClassRowProps = {
    classroom:{id: number;
    created_at: string;
    title: string;
    room: string;
    booker: string;
    date: string;
    status: string;}
}

function ClassRow({classroom:{
    // id: reservationId,
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
        <div>
            <button>
                <HiEye/>
            </button>
            <button>
                <HiPencil/>
            </button>
            <button>
                <HiTrash/>
            </button>
        </div>
    </Table.Row>
  )
}

export default ClassRow