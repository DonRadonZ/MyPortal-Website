import ViewOperations from "../../components/ui/ViewOperations"
import View from "../../components/utils/View"


interface MailViewOperationProps {
    currentView: string;
    onChangeView: (view: string) => void;
  }

function MailTableOperation({ currentView, onChangeView }: MailViewOperationProps) {
  return (
    <ViewOperations>
        <View
        viewField={currentView}
        options={[
            {value:"mail-parcel",label:"Mail/Parcel"},
            {value:"postal",label:"Postal service"},
            {value:"received", label: "Received Mail"},
            {value:"document", label: "Document not Specify Destination"},
        ]}
        onChangeView={onChangeView}
        />
    </ViewOperations>
  )
}

export default MailTableOperation