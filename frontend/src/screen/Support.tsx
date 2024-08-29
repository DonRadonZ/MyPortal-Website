import Row from "../components/layout/Row";
import Heading from "../components/Typography/Heading";
import SupportListOperation from "../feature/support/SupportListOperation";



export default function Support() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Support</Heading>
      <SupportListOperation/>
    </Row>
    </>
  )
}
