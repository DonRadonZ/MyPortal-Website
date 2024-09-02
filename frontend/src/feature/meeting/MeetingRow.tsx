
import { Table } from '../../components/ui/Table';
import styled from 'styled-components'
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi2';

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
`

type MeetingRowProps = {
    meeting:{
        id: number,
      title: string,
      room: string,
      booker: string,
      dateTime: string,
      timeStamp: string,
      banquet: string,
      status: string}
}

export default function MeetingRow({meeting:{
    // id: reservationId,
    timeStamp: created_at,
    title,
    room,
    booker,
    dateTime,
    banquet,
    status
}}: MeetingRowProps) {
  return (
    <Table.Row>
        <Title>{title}</Title>
        <span>{room}</span>
        <span>{booker}</span>
        <span>{dateTime}</span>
        <span>{created_at}</span>
        <span>{banquet}</span>
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
