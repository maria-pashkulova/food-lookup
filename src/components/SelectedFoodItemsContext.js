import { useState, createContext, useContext } from 'react';

const SelectedFoodItemsContext = createContext([]);
const AddFoodItemContext = createContext();
const EditFoodItemContext = createContext();
const RemoveFoodItemContext = createContext();

export function useSelectedFoodItems() {
    return useContext(SelectedFoodItemsContext);
}

export function useAddFoodItem() {
    return useContext(AddFoodItemContext)
}

export function useEditFoodItem() {
    return useContext(EditFoodItemContext)
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

    //handle edit food item in Selected Food Table
    const handleEditFoodItem = (editedItem) => {

        //find the index of edited object
        const editedIndex = selectedFoodItems.findIndex(foodItem => foodItem.id === editedItem.id);

        if (editedIndex !== -1) {
            const newSelectedFoodItems = [...selectedFoodItems];
            newSelectedFoodItems[editedIndex] = { ...editedItem };

            //update state
            setSelectedFoodItems(newSelectedFoodItems);
        }

    }


    //handle remove food item in Selected Food Table
    const handleRemoveFoodItem = (foodItem) => {
        setSelectedFoodItems(selectedFoodItems => selectedFoodItems.filter(currFoodItem => currFoodItem.id !== foodItem.id))
    }

    return (
        <SelectedFoodItemsContext.Provider value={selectedFoodItems}>
            <AddFoodItemContext.Provider value={handleAddFoodItem}>
                <EditFoodItemContext.Provider value={handleEditFoodItem}>
                    <RemoveFoodItemContext.Provider value={handleRemoveFoodItem}>
                        {children}
                    </RemoveFoodItemContext.Provider>
                </EditFoodItemContext.Provider>
            </AddFoodItemContext.Provider>
        </SelectedFoodItemsContext.Provider>
    )
}