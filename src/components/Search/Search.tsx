import React from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch, search }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search..."
      value={search}
      onChange={handleSearchChange}
    />
  );
};

export default Search;
