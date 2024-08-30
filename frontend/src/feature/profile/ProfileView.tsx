import Coop from "./Coop"
import Evaluate from "./Evaluate"
import Overview from "./Overview"
import Payroll from "./Payroll"
import Promotion from "./Promotion"
import TaxCert from "./TaxCert"
import TeachEval from "./TeachEval"
import Vaccine from "./Vaccine"


function ProfileView() {
  return (
    <div>
        {view === 'overview' && <Overview />}
        {view === 'details' && <Vaccine />}
        {view === 'taxcert' && <TaxCert />}
        {view === 'promotion' && <Promotion />}
        {view === 'evaluate' && <Evaluate />}
        {view === 'evaluate' && <Payroll />}
        {view === 'evaluate' && <Coop />}
        {view === 'evaluate' && <TeachEval />}
    </div>
  )
}

export default ProfileView