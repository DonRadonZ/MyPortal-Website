import { Table } from "../../components/ui/Table"


function FormTable() {
  return (
    <Table columns="1.2fr 2fr 1.2fr 1.6fr 1.2fr 6.4rem">
        <Table.Header>
            <div>ID</div>
            <div>Title</div>
            <div>Type</div>
            <div>Status</div>
            <div>Created at</div>
        </Table.Header>
    </Table>
  )
}

export default FormTable