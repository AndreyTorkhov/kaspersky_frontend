import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../api/getUser";
import { User } from "../../types/user";

function UserPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      getUserById(Number(id))
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch user:", error);
        });
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {user.name} {user.surname}
      </h1>
      <p>Status: {user.status ? "Active" : "Inactive"}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserPage;
