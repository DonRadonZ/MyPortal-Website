import Search from "../components/form/Search";
import Row from "../components/layout/Row";
import Heading from "../components/Typography/Heading";
import KnowledgeOperations from "../feature/knowledgebase/KnowledgeOperations";



export default function KnowledgeBase() {
  return (
    <>
    <Row type="horizontal">
    <Heading as="h1">Knowledge Base</Heading>
    <Search placeholder="search..."/>
    <KnowledgeOperations/>
    </Row>
    </>
  )
}
