
import { Table } from '../../components/ui/Table'
import ClassRow from './ClassRow'

const mock = [
    {
        "title": "Exam Math Module 1",
        "room": "CB2501",
        "booker": "John Doe",
        "date": "2022-09-21 9.00",
        "created_at": "2022-09-20",
        "status": "waiting"
    }
]

export default function ClassTable() {
  return (
    <Table columns="3.2fr 1.2fr 1.4fr 1.4fr 1.2fr 1.2fr 6.4rem">
        <Table.Header>
            <div>Title</div>
            <div>Room</div>
            <div>Booker</div>
            <div>Date/Time</div>
            <div>Time Stamp</div>
            <div>Status</div>
        </Table.Header>
        <Table.Body
        data={mock}
        render={(classroom) => (
            <ClassRow key={classroom.id} classroom={classroom}/>
        )}
        />
    </Table>
  )
}
