
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
        id: number;
    created_at: string;
    title: string;
    room: string;
    booker: string;
    date: string;
    status: string;}
}

export default function MeetingRow({meeting}: MeetingRowProps) {
  return (
    <div>MeetingRow</div>
  )
}
