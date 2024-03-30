import SearchFoodTable from "./components/SearchFoodTable";
import SelectedFoodTable from "./components/SelectedFoodTable";
import { useState } from "react";

function App() {

  const [selectedFoodItems, setSelectedFoodItems] = useState([
    {
      id: "2",
      description: "Banana",
      kcal: 105,
      protein: 1.3,
      fat: 0.4,
      carbs: 27
    },
    {
      id: "4",
      description: "Broccoli",
      kcal: 55,
      protein: 3.7,
      fat: 0.6,
      carbs: 11
    }

  ]);


  return (
    <div className='container mt-4'>
      <SelectedFoodTable foodItems={selectedFoodItems} />
      <SearchFoodTable />
    </div>

  );
}

export default App;
