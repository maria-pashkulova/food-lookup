import SearchFoodTable from "./SearchFoodTable";
import SelectedFoodTable from "./SelectedFoodTable";
import { useState } from "react";

function TablesPage() {

    const [selectedFoodItems, setSelectedFoodItems] = useState([]);

    //handle add food item in Selected Food Table
    function handleAddFoodItem(foodItem) {
        const isSelected = selectedFoodItems.some((selectedFood) => selectedFood.id === foodItem.id);
        if (!isSelected) {
            setSelectedFoodItems(selectedFoodItems => [...selectedFoodItems, foodItem]);
        }
    }

    //handle remove food item in Selected Food Table
    function handleRemoveFoodItem(foodItem) {
        setSelectedFoodItems(selectedFoodItems => selectedFoodItems.filter(currFoodItem => currFoodItem.id !== foodItem.id))
    }

    return (
        <div className='container mt-4'>
            <SelectedFoodTable
                foodItems={selectedFoodItems}
                onFoodItemClick={handleRemoveFoodItem}
            />
            <SearchFoodTable onFoodItemClick={handleAddFoodItem} />
        </div>

    );
}

export default TablesPage;
