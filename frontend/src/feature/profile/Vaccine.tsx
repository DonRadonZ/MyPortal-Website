import styled from "styled-components"
import Checkbox from "../../components/form/Checkbox"
import Row from "../../components/layout/Row"

const StyledVaccineBox = styled.div`
background-color: var(--color-gray-0);
  padding: 2.4rem 4rem;
  border-radius: var(--border-radius-sm);
  justify-content: center;
  border: 1px solid var();
`

const Header = styled.h1`
  text-align: center;
`

const ConfirmButton = styled.button`
  margin-left: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1.2rem 2rem;
  background-color: var(--color-green-700);
  border-radius: var(--border-radius-md);
  color: var(--color-gray-0);
  border: none;
`

export default function Vaccine() {
  return (
    <StyledVaccineBox>
    <Header>
    Register for Influenza Vaccination</Header>
    <p>You can send your intention from Month X to Month Y, Year For those who do not send their intention within the specified dates, the Health and Wellness Service Group can not reserves additional supplies</p>
    <h4>Name-Surname: John Doe</h4>
    <Row type="horizontal">
    <h4>Institution: Computer Center</h4>
    <h4>Personnel Type: Personnel</h4>
    </Row>
    <hr/>
    <h4>Purpose to get the Infulenza Vaccine</h4>
    <Row type="horizontal">
    <h4>location for get vaccine</h4>
    <h4>Date received</h4>
    </Row>
    <Checkbox>
      I confirm that I request to receive the seasonal flu vaccine and later change mind later. I permitted to deduct the vaccine cost from salaries. I regret that if I didn't come in time I accept that vaccine cannot transfer to another people.
    </Checkbox>
    <p>I would like to request the purchase of N sets of the seasonal flu vaccine (for family, staff, or department personnel)</p>
    <h4>at: Health Care 1st floor CB1</h4>
    <ConfirmButton>Confirm</ConfirmButton>
    <Row type="horizontal">
    <div>
    <h5>For additional information contact at</h5>
    <h5>Health and Wellness Service Group (CB1)</h5>
    <h5>During office hour Call: 02-470-8442 (at 08.30-18.00)</h5>
    <h5>Email: hcu@kmutt.ac.th</h5>
    </div>
    <div>
    <h5>Retirees who are interested can contact at</h5>
    <h5>Ms. Narisara Sapsri at the Office of Human Resources</h5>
    <h5>Tel.: 02-470-8085</h5>
    <h5>Email: narisara.sab@kmutt.ac.th</h5>
    </div>
    </Row>
    </StyledVaccineBox>
  )
}
