export function sumNutritionColumnValues(foodItems, column) {
    return foodItems
        .reduce((acc, currFood) => acc + Number(currFood[column]) || 0, 0)
        .toFixed(2);
}