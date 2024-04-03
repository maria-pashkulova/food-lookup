import { sumNutritionColumnValues } from '../helpers/helpers';
import { useSelectedFoodItems } from './SelectedFoodItemsContext';

function TotalsRow() {
    const foodItems = useSelectedFoodItems();
    return (
        <tr>
            <td className='bg-light fw-bold'>Total</td>
            <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'kcal')}</td>
            <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'protein')}</td>
            <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'fat')}</td>
            <td className='bg-light'>{sumNutritionColumnValues(foodItems, 'carbs')}</td>
        </tr>
    )
}

export default TotalsRow;