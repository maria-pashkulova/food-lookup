import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import styles from './SearchFoodTable.module.css';
import FoodRecord from './FoodRecord';
import { useState } from 'react';


function SearchFoodTable() {

    //simulate search result
    const [foodItemsMatch, setFoodItems] = useState([
        {
            id: "2",
            description: "Banana",
            kcal: 105,
            protein: 1.3,
            fat: 0.4,
            carbs: 27
        },
        {
            id: "4",
            description: "Broccoli",
            kcal: 55,
            protein: 3.7,
            fat: 0.6,
            carbs: 11
        }

    ]);

    //Make search input a controlled component
    const [searchInput, setSearchInput] = useState('');

    //Cancel search icon
    const [showCancelSearch, setShowCancelSearch] = useState(false);

    function handleSearch(e) {
        const searchedSubstring = e.target.value;

        setSearchInput(searchedSubstring);

        //handle whitespace input -> TODO
        if (searchedSubstring === '') {
            setShowCancelSearch(false);
        } else {
            setShowCancelSearch(true);
        }

    }

    return (
        <Table bordered hover className='mt-5'>
            <thead className='fs-5'>
                <tr>
                    <th colSpan='5' className='bg-light'>
                        <div className={styles.searchContainer}>
                            <Form.Control className='mt-3 mb-3 me-2 w-auto'
                                placeholder="Search foods..."
                                value={searchInput}
                                onChange={handleSearch}
                            />

                            {/* conditional rendering */}
                            {showCancelSearch && <i className="fa-solid fa-circle-xmark"></i>}
                        </div>

                    </th>
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
                {foodItemsMatch.map(food => (
                    <FoodRecord
                        key={food.id}
                        description={food.description}
                        kcal={food.kcal}
                        protein={food.protein}
                        fat={food.fat}
                        carbs={food.carbs}
                    />
                ))}
            </tbody>
        </Table >
    );

}

export default SearchFoodTable;