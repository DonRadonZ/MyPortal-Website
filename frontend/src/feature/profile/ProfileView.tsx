// import useViews from "../../hooks/useViews"
import Coop from "./Coop"
import Evaluate from "./Evaluate"
import Overview from "./Overview"
import Payroll from "./Payroll"
import Promotion from "./Promotion"
import TaxCert from "./TaxCert"
import TeachEval from "./TeachEval"
import Vaccine from "./Vaccine"

interface ProfileViewProps {
  view: string;
}

function ProfileView({ view }: ProfileViewProps) {
  // const {view} = useViews('overview');

  function renderContent(){
    switch(view) {
      case "overview":
        return <Overview/>
      case "vaccine":
        return <Vaccine/>
      case "taxcert":
        return <TaxCert/>
      case "promotion":
        return <Promotion/>
      case "evaluate":
        return <Evaluate/>
      case "payrollslip":
        return <Payroll/>
      case "coopslip":
        return <Coop/>
      case "teacheval":
        return <TeachEval/>
      default:
        return <Overview/>
    }
  }

  return (
    <div>
        {renderContent()}
    </div>
  )
}

export default ProfileView