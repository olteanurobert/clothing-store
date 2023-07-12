// Components
import Directory from "../../components/directory/directory.component";

// React router
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Directory />;
      <Outlet />
    </div>
  );
};

export default Home;
