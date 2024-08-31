import ViewOperations from "../../components/ui/ViewOperations";
import View from "../../components/utils/View";
// import useViews from "../../hooks/useViews";


interface ProfileViewOperationProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export default function ProfileViewOperation({ currentView, onChangeView }: ProfileViewOperationProps) {
  // const {view, setActiveView} = useViews("overview")
  
  return(
    <ViewOperations>
        <View 
        viewField={currentView}
        options={[
            {value:"overview",label:"Overview"},
            {value:"vaccine",label:"Vaccine"},
            {value:"taxcert", label: "Income Tax Certificate"},
            {value:"promotion", label:"Promotion"},
            {value:"evaluate", label: "Evaluate"},
            {value: "payroll", label: "Payroll Slip"},
            {value:"coop", label:"CoOp Slip"},
            {value:"teacheval", label:"Teach Eval."}
        ]}
        onChangeView={onChangeView}
        />
    </ViewOperations>
  )
}
