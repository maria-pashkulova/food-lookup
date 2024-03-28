function FoodRecord({
    description,
    kcal,
    protein,
    fat,
    carbs
}) {

    return (
        <tr>
            <td>{description}</td>
            <td>{kcal}</td>
            <td>{protein}</td>
            <td>{fat}</td>
            <td>{carbs}</td>
        </tr>
    )

}

export default FoodRecord;