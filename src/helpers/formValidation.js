export default function validateFormInput(foodItem) {
    const errors = {};
    const { description, ...numberInputValues } = foodItem;

    //check if description is defined and not an empty string
    if (!foodItem.description.trim()) errors.description = 'Description is required!';

    //check if number fields are defined and not empty
    //check if values are valid numbers (not a string and >= 0)
    Object.entries(numberInputValues).forEach(([fieldName, value]) => {
        const labelName = transformFirstLetterToUpperCase(fieldName);
        if (!value.trim()) {
            errors[fieldName] = `${labelName} value is required!`;
        } else if (isNaN(value)) {
            errors[fieldName] = `${labelName} value must be a number!`;
        } else if (value < 0) {
            errors[fieldName] = `${labelName} value must be 0 or greater than 0!`;
        }
    });

    return errors;

}

function transformFirstLetterToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}