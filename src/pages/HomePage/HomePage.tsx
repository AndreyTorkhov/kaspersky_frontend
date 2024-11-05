import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { User } from "../../types/user";
import Search from "../../components/Search";
import UserList from "../../components/UserList/UserList";

function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllUsers(search)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, [search]);
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <UserList users={users} />
    </>
  );
}

export default HomePage;
