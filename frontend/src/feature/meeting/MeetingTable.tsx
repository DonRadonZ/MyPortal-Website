import { useState } from 'react';
import { Table } from '../../components/ui/Table'
import { meeting } from '../../data/mock-reservation'
import Pagination from '../../components/utils/Pagination';
import MeetingRow from './MeetingRow';
import Menus from '../../components/ui/Menus';


export default function MeetingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const meetingItems = meeting.slice(indexOfFirstItem, indexOfLastItem);
  
  function handlePageChange(pageNumber: number){
    setCurrentPage(pageNumber);
  }

  return (
    <Menus>
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
        <Table.Body 
        data={meetingItems}
        render={(meeting) => 
          <MeetingRow key={meeting.id} meeting={meeting}/>
      } 
        />
      <Table.Footer>
      <Pagination 
            count={meeting.length}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            />
      </Table.Footer>
    </Table>
    </Menus>
  )
}