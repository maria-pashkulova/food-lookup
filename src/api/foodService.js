const baseUrl = 'http://localhost:4000/food';

export function search(searchQuery, updateMatches) {

    return fetch(`${baseUrl}?description_like=${searchQuery}`, {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(updateMatches);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`Http Error ${response.statusText}`);
        error.response = response;
        console.log(error);
        throw error;
    }
}

function parseJSON(response) {
    //json -> js
    return response.json();
}


//foodData => {description, kcal,protein,fat,carbs}
export function createFoodItem({ description, kcal, protein, fat, carbs }) {

    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            description: description.trim(),
            kcal: Number(kcal),
            protein: Number(protein),
            fat: Number(fat),
            carbs: Number(carbs)
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}
