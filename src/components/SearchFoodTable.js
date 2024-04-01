import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import styles from './SearchFoodTable.module.css';
import FoodRecord from './FoodRecord';
import { useState } from 'react';
import { search } from '../api/foodService';


function SearchFoodTable({
    onFoodItemClick
}) {

    const [foodItemsMatch, setFoodItemsMatch] = useState([]);

    //Make search input a controlled component
    const [searchInput, setSearchInput] = useState('');

    //Cancel search icon
    const [showCancelSearch, setShowCancelSearch] = useState(false);

    const handleSearch = (e) => {
        //controlled component
        const searchQuery = e.target.value;
        setSearchInput(searchQuery);

        //Make request when user has entered at least 3 characters 
        //(whitespace handling included)
        if (searchQuery.trim().length >= 3) {
            search(searchQuery.trim(), (searchMatches => setFoodItemsMatch(searchMatches)))
                .catch(err => console.log(err))
        } else if (searchQuery.trim() === '') {
            setFoodItemsMatch([]);
        }

        setShowCancelSearch(searchQuery.length >= 1);

    }

    const handleSearchCancel = () => {
        setSearchInput('');
        setFoodItemsMatch([]);
        setShowCancelSearch(false);
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
                            {showCancelSearch &&
                                <i
                                    onClick={handleSearchCancel}
                                    className="fa-solid fa-circle-xmark"
                                ></i>}
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
                {foodItemsMatch.map(foodItem => (
                    <FoodRecord
                        key={foodItem.id}
                        foodItem={foodItem}
                        onFoodItemClick={onFoodItemClick}
                    />
                ))}
            </tbody>
        </Table >
    );

}

export default SearchFoodTable;