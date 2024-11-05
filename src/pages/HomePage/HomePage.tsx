// import { NavLink } from "react-router-dom";
import UserList from "../../components/UserList/UserList";

function HomePage() {
  return (
    <>
      <ul>
        {/* <li>
          <NavLink to="/user">User</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li> */}
      </ul>
      <UserList />
    </>
  );
}

export default HomePage;
