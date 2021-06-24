import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { useHistory } from "react-router";
const LandingPage = () => {
  const history = useHistory();
  if (localStorage.getItem("token") !== null) {
    history.push("/m");
  }
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
};

export default LandingPage;
