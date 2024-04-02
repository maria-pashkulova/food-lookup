import { useState, createContext, useContext } from 'react';

const SelectedFoodItemsContext = createContext([]);
const AddFoodItemContext = createContext();
const RemoveFoodItemContext = createContext();

export function useSelectedFoodItems() {
    return useContext(SelectedFoodItemsContext);
}

export function useAddFoodItem() {
    return useContext(AddFoodItemContext)
}

export function useRemoveFoodItem() {
    return useContext(RemoveFoodItemContext);
}


export function SelectedFoodItemsProvider({ children }) {
    const [selectedFoodItems, setSelectedFoodItems] = useState([]);

    // handle add food item in Selected Food Table
    const handleAddFoodItem = (foodItem) => {
        const isSelected = selectedFoodItems.some((selectedFood) => selectedFood.id === foodItem.id);
        if (!isSelected) {
            setSelectedFoodItems(selectedFoodItems => [...selectedFoodItems, foodItem]);
        }
    }

    //handle remove food item in Selected Food Table
    const handleRemoveFoodItem = (foodItem) => {
        setSelectedFoodItems(selectedFoodItems => selectedFoodItems.filter(currFoodItem => currFoodItem.id !== foodItem.id))
    }

    return (
        <SelectedFoodItemsContext.Provider value={selectedFoodItems}>
            <AddFoodItemContext.Provider value={handleAddFoodItem}>
                <RemoveFoodItemContext.Provider value={handleRemoveFoodItem}>
                    {children}
                </RemoveFoodItemContext.Provider>
            </AddFoodItemContext.Provider>
        </SelectedFoodItemsContext.Provider>
    )
}