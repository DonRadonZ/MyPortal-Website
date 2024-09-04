import MailTable from './MailTable';
import DocumentTable from './DocumentTable';
import ReceivedTable from './ReceivedTable';
import PostalTable from './PostalTable';

interface MailViewProps {
    view: string;
  }

function MailTableView({view} : MailViewProps) {
    function renderContent(){
        switch(view) {
          case "mail":
            return <MailTable/>
          case "mail-parcel":
            return <ReceivedTable/>
          case "received":
            return <PostalTable/>
          case "document":
            return <DocumentTable/>
          default:
            return <MailTable/>
        }
      }
    
      return (
        <div>
            {renderContent()}
        </div>
      )
}

export default MailTableView