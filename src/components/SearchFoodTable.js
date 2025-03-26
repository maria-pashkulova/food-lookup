import Table from "react-bootstrap/Table";
import SearchInput from "./SearchInput";
import HeaderRow from "./HeaderRow";
import FoodRecord from "./FoodRecord";
import ServerErrorModal from "./ServerErrorModal";

import { useState } from "react";
import useModal from "../custom-hooks/useModal";

import { deleteFoodItem } from "../api/foodService";
import { useSelectedFoodItems } from "./SelectedFoodItemsContext";

function SearchFoodTable() {
  const {
    handleAddFoodItem: onFoodItemClick,
    handleRemoveFoodItem: changeSelectedFoodItemsOnDbDelete,
  } = useSelectedFoodItems();

  /*-------------States---------- */

  const [foodItemsMatch, setFoodItemsMatch] = useState([]);

  const handleSearchResults = (results) => {
    setFoodItemsMatch(results);
  };

  const changeFoodItemsMatchOnDbDelete = (deletedFoodItemId) => {
    setFoodItemsMatch((searchMatches) =>
      searchMatches.filter((foodItem) => foodItem.id !== deletedFoodItemId)
    );
  };

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

  return (
    <>
      <ServerErrorModal errorOccured={isShowing} handleClose={toggle} />
      <Table bordered hover className="mt-5">
        <thead className="fs-5">
          <SearchInput onSearchResults={handleSearchResults} />
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
