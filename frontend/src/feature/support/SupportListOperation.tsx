import LinkOperations from "../../components/ui/LinkOperations";
import Filter from "../../components/utils/Filter";


export default function SupportListOperation() {
  return (
    <LinkOperations>
        <Filter filterField="support" options={[
            {value: "all", label: "All Support"},
            {value: "education", label: "Education"},
            {value: "facilities-service", label: "Facilities/Service"},
            {value:"computer-internet", label: "Computer/Internet"},
            {value:"address-contact", label: "Address/Contract"}
        ]} />
    </LinkOperations>
  )
}
