import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import styles from './SearchFoodTable.module.css';
import FoodRecord from './FoodRecord';
import ServerErrorModal from './ServerErrorModal';
import { useState } from 'react';
import { search } from '../api/foodService';
import { useAddFoodItem } from './SelectedFoodItemsContext';
import HeaderRow from './HeaderRow';


function SearchFoodTable() {
    const onFoodItemClick = useAddFoodItem();

    const [foodItemsMatch, setFoodItemsMatch] = useState([]);

    //Make search input a controlled component
    const [searchInput, setSearchInput] = useState('');

    //Cancel search icon
    const [showCancelSearch, setShowCancelSearch] = useState(false);

    //errors connecting with server
    const [showErrModal, setShowErrModal] = useState(false);

    const handleSearch = (e) => {
        //controlled component
        const searchQuery = e.target.value;
        setSearchInput(searchQuery);

        //Make request when user has entered at least 3 characters 
        //(whitespace handling included)
        if (searchQuery.trim().length >= 3) {
            search(searchQuery.trim(), (searchMatches => setFoodItemsMatch(searchMatches)))
                .catch(err => setShowErrModal(true))
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

    const handleErrModalClose = () => setShowErrModal(false);

    return (
        <>
            <ServerErrorModal
                errorOccured={showErrModal}
                handleClose={handleErrModalClose}
            />
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
                    <HeaderRow />
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
        </>

    );

}

export default SearchFoodTable;