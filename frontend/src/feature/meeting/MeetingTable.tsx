import { Table } from '../../components/ui/Table'

export default function MeetingTable() {
  return (
    <Table columns="4fr 1fr 1.4fr 1.4fr 1.6fr 1.2fr 1.6fr 3.2rem">
        <Table.Header>
            <div>Title</div>
            <div>Room</div>
            <div>Booker</div>
            <div>Date/Time</div>
            <div>Time Stamp</div>
            <div>Banquet</div>
            <div>Status</div>
        </Table.Header>
    </Table>
  )
}