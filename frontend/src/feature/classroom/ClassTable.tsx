
import { useState } from 'react'
import Menus from '../../components/ui/Menus'
import { Table } from '../../components/ui/Table'
import Pagination from '../../components/utils/Pagination'
import { classroom } from '../../data/mock-class'
import ClassRow from './ClassRow'



export default function ClassTable() {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = classroom.slice(indexOfFirstItem, indexOfLastItem);
  
  function handlePageChange(pageNumber: number){
    setCurrentPage(pageNumber);
  }

  return (
    <Menus>
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
        data={currentItems}
        render={(classroom) => (
            <ClassRow key={classroom.id} classroom={classroom}/>
        )}
        />
        <Table.Footer>
            <Pagination 
            count={classroom.length}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            />
        </Table.Footer>
    </Table>
    </Menus>
  )
}
