import SearchFoodTable from "./components/SearchFoodTable";
import SelectedFoodTable from "./components/SelectedFoodTable";

function App() {
  return (
    <div className='container mt-4'>
      <SelectedFoodTable />
      <SearchFoodTable />
    </div>

  );
}

export default App;
