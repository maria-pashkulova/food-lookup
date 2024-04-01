import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const formInitialState = {
    description: '',
    kcal: '',
    protein: '',
    fat: '',
    carbs: ''
}

function CreateFoodPage() {

    const [foodData, setFoodData] = useState(formInitialState);

    const handleInputChange = (e) => {

        setFoodData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //use create food item service here
    }

    return (
        <div className='container mt-4 w-50'>
            <h3>Create Food Item</h3>
            <Form onSubmit={handleFormSubmit} className='mt-4'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={foodData.description}
                            onChange={handleInputChange}
                            placeholder="Enter description" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="kcal">
                        <Form.Label>Kcal</Form.Label>
                        <Form.Control
                            type="number"
                            name="kcal"
                            value={foodData.kcal}
                            onChange={handleInputChange}
                            placeholder="Enter kcal" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="protein">
                        <Form.Label>Protein</Form.Label>
                        <Form.Control
                            type="number"
                            name="protein"
                            value={foodData.protein}
                            onChange={handleInputChange}
                            placeholder="Enter grams of protein" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="fat">
                        <Form.Label>Fat</Form.Label>
                        <Form.Control
                            type="number"
                            name="fat"
                            value={foodData.fat}
                            onChange={handleInputChange}
                            placeholder="Enter grams of fat" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="carbs">
                        <Form.Label>Carbs</Form.Label>
                        <Form.Control
                            type="number"
                            name="carbs"
                            value={foodData.carbs}
                            onChange={handleInputChange}
                            placeholder="Enter grams of carbs" />
                    </Form.Group>
                </Row>

                <Button className='me-2' variant="primary" type="submit">
                    Create
                </Button>
                <Button as={Link} to="/" variant="primary" type="button">
                    Back
                </Button>
            </Form>
        </div>
    )
}

export default CreateFoodPage;