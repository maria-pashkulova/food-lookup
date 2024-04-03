import Table from 'react-bootstrap/Table';
import FoodRecord from './FoodRecord';
import { useSelectedFoodItems, useRemoveFoodItem } from './SelectedFoodItemsContext';
import HeaderRow from './HeaderRow';
import TotalsRow from './TotalsRow';

function SelectedFoodTable() {

    const foodItems = useSelectedFoodItems();
    const onFoodItemClick = useRemoveFoodItem();

    return (
        <Table bordered hover>
            <thead className='fs-5'>
                <tr >
                    <th className='bg-light' colSpan='5'>Selected foods</th>
                </tr>
                <HeaderRow />
            </thead>
            <tbody>
                {foodItems.map(foodItem => (
                    <FoodRecord
                        key={foodItem.id}
                        foodItem={foodItem}
                        onFoodItemClick={onFoodItemClick}
                    />
                ))}

                <TotalsRow />
            </tbody>
        </Table>
    );

}

export default SelectedFoodTable;