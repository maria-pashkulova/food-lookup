import Button from 'react-bootstrap/Button';
import SearchFoodTable from "./SearchFoodTable";
import SelectedFoodTable from "./SelectedFoodTable";
import { Link } from "react-router-dom";


function TablesPage() {

    return (
        <div className='container mt-4'>
            <SelectedFoodTable />
            <SearchFoodTable />
            <Button as={Link} to="/create" variant="primary">Create Food</Button>
        </div>

    );
}

export default TablesPage;
