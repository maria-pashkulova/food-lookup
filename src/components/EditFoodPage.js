import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import ServerErrorModal from './ServerErrorModal';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import useModal from '../custom-hooks/useModal';
import { useEditFoodItem } from './SelectedFoodItemsContext';

import { getById, editFoodItem } from '../api/foodService';
import validateFormInput from '../helpers/formValidation';

const formInitialState = {
    description: '',
    kcal: '',
    protein: '',
    fat: '',
    carbs: ''
}

function EditFoodPage() {

    const navigate = useNavigate();
    const { foodId } = useParams();
    const changeSelectedFoodItemsOnDbUpdate = useEditFoodItem();


    const [foodData, setFoodData] = useState(formInitialState);
    //error message for each form input; client-side validation
    const [errors, setErrors] = useState({});

    //errors connecting with server
    const { isShowing, toggle } = useModal();

    useEffect(() => {

        //populate form with food item's data
        getById(foodId, (foodData => setFoodData(foodData)))
            .catch(err => navigate('/'))

    }, [foodId]);

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

        //edit food item in DB
        editFoodItem(foodId, foodData)
            .then((editedFoodItem) => changeSelectedFoodItemsOnDbUpdate(editedFoodItem))
            .then(() => navigate('/'))
            .catch(err => toggle());

        //edit food item in selectedFoodState if edit in db was successful
    }

    return (
        <>
            <ServerErrorModal
                errorOccured={isShowing}
                handleClose={toggle}
            />
            <Container className='mt-4 w-50'>
                <h3>Edit Food Item</h3>
                <Form noValidate onSubmit={handleFormSubmit} className='mt-4'>
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
                        Edit
                    </Button>
                    <Button as={Link} to="/" variant="primary" type="button">
                        Back
                    </Button>
                </Form>
            </Container>
        </>

    )
}

export default EditFoodPage;