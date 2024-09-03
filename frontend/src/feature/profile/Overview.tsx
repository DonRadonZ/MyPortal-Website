import styled from "styled-components"
import Row from "../../components/layout/Row"

const Box = styled.div`
  background-color: var(--color-gray-0);
  padding: 2.4rem 3.2rem;
`

export default function Overview() {
  return (
    <Box>
      <Row type="horizontal">
        <div>
          <h1>Guest Master</h1>
          <h2>Software Engineer</h2>
        </div>
        <div>
          Photo
        </div>
      </Row>
      <h4>Major: Computer Center</h4>
      <h4>Date-Birth: XX/XX/XXXX</h4>
      <h4>Gender: XXXX</h4>
      <h4>Staff ID: XXXXXXX</h4>
    </Box>
  )
}
