import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import styles from './SearchFoodTable.module.css';
import FoodRecord from './FoodRecord';



function SearchFoodTable() {
    return (
        <Table bordered hover className='mt-5'>
            <thead className='fs-5'>
                <tr>
                    <th colSpan='5' className='bg-light'>
                        <div className={styles.searchContainer}>
                            <Form.Control className='mt-3 mb-3 me-2 w-auto'
                                placeholder="Search foods..."
                            />
                            <i class="fa-solid fa-circle-xmark"></i>
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
                <FoodRecord
                    description='Wholegrain Rolled Oats'
                    kcal='450'
                    protein='0.3'
                    fat='1.2'
                    carbs='80'
                />

                <FoodRecord
                    description='Grilled Chicken Breast'
                    kcal='165'
                    protein='31'
                    fat='3.6'
                    carbs='0' />

            </tbody>
        </Table >
    );

}

export default SearchFoodTable;