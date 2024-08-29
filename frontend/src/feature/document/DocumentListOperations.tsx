import LinkOperations from "../../components/ui/LinkOperations";
import Filter from "../../components/utils/Filter";


export default function DocumentListOperations() {
  return (
    <LinkOperations>
        <Filter filterField="document" options={[
            {value: "all", label: "All"},
            {value: "main", label: "Main Document"},
            {value: "form", label: "Form Document"},
            {value:"major", label: "Major Document"}
        ]} />
    </LinkOperations>
  )
}
