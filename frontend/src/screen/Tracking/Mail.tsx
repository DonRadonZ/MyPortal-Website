import Search from "../../components/form/Search";
import Row from "../../components/layout/Row";
import Heading from "../../components/Typography/Heading";
import MailTableOperation from "../../feature/mail/MailTableOperation";
import MailTableView from "../../feature/mail/MailTableView";
import useViews from "../../hooks/useViews";


export default function Mail() {

  const { view, setActiveView } = useViews('mail');
  return (
    <>
    <Row type="horizontal">
    <Heading>Mail/Parcel</Heading>
    <Search
    placeholder="Search..."/>
    <MailTableOperation currentView={view} onChangeView={setActiveView}/>
    </Row>
    <MailTableView view={view}/>
    </>
  )
}
