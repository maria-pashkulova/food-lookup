function FoodRecord({
    foodItem,
    onFoodItemClick
}) {

    return (
        <tr onClick={() => onFoodItemClick(foodItem)}>
            <td>{foodItem.description}</td>
            <td>{foodItem.kcal}</td>
            <td>{foodItem.protein}</td>
            <td>{foodItem.fat}</td>
            <td>{foodItem.carbs}</td>
        </tr>
    )

}

export default FoodRecord;