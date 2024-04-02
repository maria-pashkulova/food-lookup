import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import ServerErrorModal from './ServerErrorModal';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createFoodItem } from '../api/foodService';
import validateFormInput from '../helpers/formValidation';

const formInitialState = {
    description: '',
    kcal: '',
    protein: '',
    fat: '',
    carbs: ''
}

function CreateFoodPage() {

    const navigate = useNavigate();

    const [foodData, setFoodData] = useState(formInitialState);
    //error message for each form input; client-side validation
    const [errors, setErrors] = useState({});

    //errors connecting with server
    const [showErrModal, setShowErrModal] = useState(false);

    const handleInputChange = (e) => {

        setFoodData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //validate before making a request
        const formErrors = validateFormInput(foodData);
        setErrors(formErrors);

        //prevent request if there are errors
        if (Object.keys(formErrors).length) return;

        createFoodItem(foodData)
            .then(() => navigate('/'))
            .catch(err => setShowErrModal(true));
    }

    const handleErrModalClose = () => setShowErrModal(false);


    return (
        <>
            <ServerErrorModal
                errorOccured={showErrModal}
                handleClose={handleErrModalClose}
            />
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
                                isInvalid={!!errors.description}
                                placeholder="Enter description" />
                            <Form.Control.Feedback type="invalid">
                                {errors.description}
                            </Form.Control.Feedback>
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
                                isInvalid={!!errors.kcal}
                                placeholder="Enter kcal" />
                            <Form.Control.Feedback type="invalid">
                                {errors.kcal}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="protein">
                            <Form.Label>Protein</Form.Label>
                            <Form.Control
                                type="number"
                                name="protein"
                                value={foodData.protein}
                                onChange={handleInputChange}
                                isInvalid={!!errors.protein}
                                placeholder="Enter grams of protein" />
                            <Form.Control.Feedback type="invalid">
                                {errors.protein}
                            </Form.Control.Feedback>
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
                                isInvalid={!!errors.fat}
                                placeholder="Enter grams of fat" />
                            <Form.Control.Feedback type="invalid">
                                {errors.fat}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="carbs">
                            <Form.Label>Carbs</Form.Label>
                            <Form.Control
                                type="number"
                                name="carbs"
                                value={foodData.carbs}
                                onChange={handleInputChange}
                                isInvalid={!!errors.carbs}
                                placeholder="Enter grams of carbs" />
                            <Form.Control.Feedback type="invalid">
                                {errors.carbs}
                            </Form.Control.Feedback>
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
        </>

    )
}

export default CreateFoodPage;