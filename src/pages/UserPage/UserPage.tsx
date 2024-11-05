import { NavLink } from "react-router-dom";
// import { useParams } from "react-router";

function UserPage() {
  //   const { id } = useParams();
  return (
    <>
      {/* <h1>User ID: {id}</h1> */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li> */}
      </ul>
    </>
  );
}

export default UserPage;
