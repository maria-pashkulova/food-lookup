import Table from 'react-bootstrap/Table';
import FoodRecord from './FoodRecord';

function SelectedFoodTable() {
    return (
        <Table bordered hover>
            <thead className='fs-5'>
                <tr >
                    <th className='bg-light' colSpan='5'>Selected foods</th>
                </tr>
                <tr>
                    <th className='bg-light'>Description</th>
                    <th className='bg-light'>Kcal</th>
                    <th className='bg-light'>Protein(g)</th>
                    <th className='bg-light'>Fat(g)</th>
                    <th className='bg-light'>Carbs(g)</th>
                </tr>
            </thead>
            <tbody>
                <FoodRecord
                    description='Wholegrain Rolled Oats'
                    kcal='450'
                    protein='0.3'
                    fat='1.2'
                    carbs='80'
                />
                <tr>
                    <td className='bg-light'>Total</td>
                    <td className='bg-light'>450</td>
                    <td className='bg-light'>35</td>
                    <td className='bg-light'>45</td>
                    <td className='bg-light'>5</td>
                </tr>
            </tbody>
        </Table>
    );

}

export default SelectedFoodTable;