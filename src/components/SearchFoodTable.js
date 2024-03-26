import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


function SearchFoodTable() {
    return (
        <Table bordered hover className='mt-5'>
            <thead className='fs-5'>
                <tr>
                    <th colSpan='5' className='bg-light'>
                        <Form.Control className='mt-3 mb-3 w-auto'
                            placeholder="Search foods..."
                        />
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
                <tr>
                    <td>Wholegrain Rolled Oats</td>
                    <td>450</td>
                    <td>0.3</td>
                    <td>1.2</td>
                    <td>80</td>
                </tr>
                <tr>

                    <td>Wholegrain Rolled Oats</td>
                    <td>450</td>
                    <td>0.3</td>
                    <td>1.2</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Wholegrain Rolled Oats</td>
                    <td>450</td>
                    <td>0.3</td>
                    <td>1.2</td>
                    <td>80</td>
                </tr>
            </tbody>
        </Table>
    );

}

export default SearchFoodTable;