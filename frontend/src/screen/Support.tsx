import Search from "../components/form/Search";
import Row from "../components/layout/Row";
import Heading from "../components/Typography/Heading";
import SupportList from "../feature/support/SupportList";
import SupportListOperation from "../feature/support/SupportListOperation";



export default function Support() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Support</Heading>
      <Search placeholder="search..."/>
      <SupportListOperation/>
    </Row>
    <SupportList/>
    </>
  )
}
