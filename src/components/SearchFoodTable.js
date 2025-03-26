import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import styles from "./SearchFoodTable.module.css";
import FoodRecord from "./FoodRecord";
import ServerErrorModal from "./ServerErrorModal";

import { useState } from "react";
import useModal from "../custom-hooks/useModal";

import { search, deleteFoodItem } from "../api/foodService";
import { useSelectedFoodItems } from "./SelectedFoodItemsContext";
import HeaderRow from "./HeaderRow";

function SearchFoodTable() {
  const {
    handleAddFoodItem: onFoodItemClick,
    handleRemoveFoodItem: changeSelectedFoodItemsOnDbDelete,
  } = useSelectedFoodItems();

  /*-------------States---------- */

  const [foodItemsMatch, setFoodItemsMatch] = useState([]);

  const changeFoodItemsMatchOnDbDelete = (deletedFoodItemId) => {
    setFoodItemsMatch((searchMatches) =>
      searchMatches.filter((foodItem) => foodItem.id !== deletedFoodItemId)
    );
  };

  //Make search input a controlled component
  const [searchInput, setSearchInput] = useState("");

  //Cancel search icon
  const [showCancelSearch, setShowCancelSearch] = useState(false);

  //errors connecting with server
  const { isShowing, toggle } = useModal();

  /*-------------Handlers---------- */

  const handleDelete = (foodItem) => {
    //delete request
    deleteFoodItem(foodItem.id)
      .then(() => changeFoodItemsMatchOnDbDelete(foodItem.id))
      .then(() => changeSelectedFoodItemsOnDbDelete(foodItem))
      .catch((err) => {
        toggle();
      });

    //if delete is successful:
    //change foodItemsMatch in Search Food Table
    //change selectedFoodTable
  };

  const handleSearch = (e) => {
    //controlled component
    const searchQuery = e.target.value;
    setSearchInput(searchQuery);

    //Make request when user has entered at least 3 characters
    //(whitespace handling included)
    if (searchQuery.trim().length >= 3) {
      search(searchQuery.trim(), (searchMatches) =>
        setFoodItemsMatch(searchMatches)
      ).catch((err) => console.error(err));
    } else if (searchQuery.trim() === "") {
      setFoodItemsMatch([]);
    }

    setShowCancelSearch(searchQuery.length >= 1);
  };

  const handleSearchCancel = () => {
    setSearchInput("");
    setFoodItemsMatch([]);
    setShowCancelSearch(false);
  };

  return (
    <>
      <ServerErrorModal errorOccured={isShowing} handleClose={toggle} />
      <Table bordered hover className="mt-5">
        <thead className="fs-5">
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
          <HeaderRow addActionHeader={true} />
        </thead>
        <tbody>
          {foodItemsMatch.map((foodItem) => (
            <FoodRecord
              key={foodItem.id}
              foodItem={foodItem}
              onFoodItemClick={onFoodItemClick}
              addActionButtons={true}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default SearchFoodTable;
