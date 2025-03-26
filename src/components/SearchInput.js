import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./SearchInput.module.css";
import { search } from "../api/foodService";

function SearchInput({ onSearchResults }) {
  //Make search input a controlled component
  const [searchInput, setSearchInput] = useState("");
  //Cancel search icon
  const [showCancelSearch, setShowCancelSearch] = useState(false);

  const handleSearch = (e) => {
    //controlled component
    const searchQuery = e.target.value;
    setSearchInput(searchQuery);

    //Make request when user has entered at least 3 characters
    //(whitespace handling included)
    if (searchQuery.trim().length >= 3) {
      search(searchQuery.trim(), onSearchResults).catch((err) =>
        console.error(err)
      );
    } else if (searchQuery.trim() === "") {
      onSearchResults([]);
    }

    setShowCancelSearch(searchQuery.length >= 1);
  };

  const handleSearchCancel = () => {
    setSearchInput("");
    onSearchResults([]);
    setShowCancelSearch(false);
  };

  return (
    <tr>
      <th colSpan="6" className="bg-light">
        <div className={styles.searchContainer}>
          <Form.Control
            className="mt-3 mb-3 me-2 w-auto"
            placeholder="Search foods..."
            value={searchInput}
            onChange={handleSearch}
          />

          {/* conditional rendering */}
          {showCancelSearch && (
            <i
              onClick={handleSearchCancel}
              className="fa-solid fa-circle-xmark"
            ></i>
          )}
        </div>
      </th>
    </tr>
  );
}

export default SearchInput;
