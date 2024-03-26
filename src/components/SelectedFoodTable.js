import Table from 'react-bootstrap/Table';

function SelectedFoodTable() {
    return (
        <Table bordered hover>
            <thead className='fs-5'>
                <tr >
                    <th className='bg-light' colSpan='5'>Selected foods</th>
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
                <tr>
                    <td className='bg-light'>Total</td>
                    <td className='bg-light'>450</td>
                    <td className='bg-light'>35</td>
                    <td className='bg-light'>45</td>
                    <td className='bg-light'>5</td>
                </tr>
            </tbody>
        </Table>
    );

}

export default SelectedFoodTable;