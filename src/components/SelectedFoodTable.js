import Table from 'react-bootstrap/Table';
import FoodRecord from './FoodRecord';
import { sumNutritionColumnValues } from '../helpers/helpers';

function SelectedFoodTable({ foodItems }) {
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
                {foodItems.map(food => (
                    <FoodRecord
                        key={food.id}
                        description={food.description}
                        kcal={food.kcal}
                        protein={food.protein}
                        fat={food.fat}
                        carbs={food.carbs}
                    />
                ))}

                <tr>
                    <td className='bg-light fw-bold'>Total</td>
                    <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'kcal')}</td>
                    <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'protein')}</td>
                    <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'fat')}</td>
                    <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'carbs')}</td>
                </tr>
            </tbody>
        </Table>
    );

}

export default SelectedFoodTable;