import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { User } from "../../types/user";
import Search from "../../components/Search";
import UserList from "../../components/UserList/UserList";
import Pagination from "../../components/Pagination";
import styles from "./HomePage.module.scss";

function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(searchQuery);
      setPage(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    getAllUsers(page, 12, search)
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, [search, page]);

  const handleSearchChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className={styles.homeContainer}>
      <Search search={searchQuery} setSearch={handleSearchChange} />
      <UserList users={users} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default HomePage;
