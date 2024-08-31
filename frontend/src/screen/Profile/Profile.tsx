import Row from "../../components/layout/Row";
import Heading from "../../components/Typography/Heading";
import ProfileView from "../../feature/profile/ProfileView";
import ProfileViewOperation from "../../feature/profile/ProfileViewOperation";
import useViews from "../../hooks/useViews";



export default function Profile() {

  const { view, setActiveView } = useViews('overview');
  return (
    <>
    <Row type="horizontal">
    <Heading>Profile</Heading>
    <ProfileViewOperation currentView={view} onChangeView={setActiveView}/>
    </Row>
    <ProfileView view={view}/>
    </>
  )
}
