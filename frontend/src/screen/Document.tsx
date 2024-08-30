import Search from "../components/form/Search";
import Row from "../components/layout/Row";
import Heading from "../components/Typography/Heading";
import DocumentListOperations from "../feature/document/DocumentListOperations";


export default function Document() {
  return (
    <>
    <Row type="horizontal">
    <Heading as="h1">Document</Heading>
    <Search placeholder="search..."/>
    <DocumentListOperations/>
    </Row>
    </>
  )
}
