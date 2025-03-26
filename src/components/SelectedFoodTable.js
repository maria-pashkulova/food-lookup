import Table from "react-bootstrap/Table";
import FoodRecord from "./FoodRecord";
import { useSelectedFoodItems } from "./SelectedFoodItemsContext";
import HeaderRow from "./HeaderRow";
import TotalsRow from "./TotalsRow";

function SelectedFoodTable() {
  const { selectedFoodItems, handleRemoveFoodItem } = useSelectedFoodItems();

  return (
    <Table bordered hover>
      <thead className="fs-5">
        <tr>
          <th className="bg-light" colSpan="5">
            Selected foods
          </th>
        </tr>
        <HeaderRow />
      </thead>
      <tbody>
        {selectedFoodItems.map((foodItem) => (
          <FoodRecord
            key={foodItem.id}
            foodItem={foodItem}
            onFoodItemClick={handleRemoveFoodItem}
          />
        ))}

        <TotalsRow />
      </tbody>
    </Table>
  );
}

export default SelectedFoodTable;
