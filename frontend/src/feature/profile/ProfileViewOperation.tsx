import ViewOperations from "../../components/ui/ViewOperations";
import View from "../../components/utils/View";


export default function ProfileViewOperation() {
  return(
    <ViewOperations>
        <View viewField="profile"options={[
            {value:"overview",label:"Overview"},
            {value:"vaccine",label:"Vaccine"},
            {value:"taxcert", label: "Income Tax Certificate"},
            {value:"promotion", label:"Promotion"},
            {value:"evaluate", label: "Evaluate"},
            {value: "payroll", label: "Payroll Slip"},
            {value:"coop", label:"CoOp Slip"},
            {value:"teacheval", label:"Teach Eval."}
        ]} />
    </ViewOperations>
  )
}
