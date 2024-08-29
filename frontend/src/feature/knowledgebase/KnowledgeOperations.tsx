
import LinkOperations from '../../components/ui/LinkOperations'
import Filter from '../../components/utils/Filter'

export default function KnowledgeOperations() {
  return (
    <LinkOperations>
        <Filter filterField="knowledgebase" options={[
            {value: "all", label: "All"},
            {value: "main", label: "General"},
            {value: "form", label: "Workshop"},
            {value:"major", label: "Major"}
        ]} />
    </LinkOperations>
  )
}
