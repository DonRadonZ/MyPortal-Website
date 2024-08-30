import Row from "../../components/layout/Row";
import Heading from "../../components/Typography/Heading";
import ProfileViewOperation from "../../feature/profile/ProfileViewOperation";



export default function Profile() {
  return (
    <>
    <Row type="horizontal">
    <Heading>Profile</Heading>
    <ProfileViewOperation/>
    </Row>
    </>
  )
}
