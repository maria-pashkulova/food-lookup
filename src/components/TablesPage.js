import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import SearchFoodTable from "./SearchFoodTable";
import SelectedFoodTable from "./SelectedFoodTable";
import { Link } from "react-router-dom";


function TablesPage() {

    return (
        <Container className='my-4'>
            <SelectedFoodTable />
            <SearchFoodTable />
            <Button as={Link} to="/create" variant="primary">Create Food</Button>
        </Container>

    );
}

export default TablesPage;
