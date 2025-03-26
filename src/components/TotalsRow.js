import { sumNutritionColumnValues } from "../helpers/helpers";
import { useSelectedFoodItems } from "./SelectedFoodItemsContext";

function TotalsRow() {
  const { selectedFoodItems } = useSelectedFoodItems();
  return (
    <tr>
      <td className="bg-light fw-bold">Total</td>
      <td className="bg-light">
        {sumNutritionColumnValues(selectedFoodItems, "kcal")}
      </td>
      <td className="bg-light">
        {sumNutritionColumnValues(selectedFoodItems, "protein")}
      </td>
      <td className="bg-light">
        {sumNutritionColumnValues(selectedFoodItems, "fat")}
      </td>
      <td className="bg-light">
        {sumNutritionColumnValues(selectedFoodItems, "carbs")}
      </td>
    </tr>
  );
}

export default TotalsRow;
