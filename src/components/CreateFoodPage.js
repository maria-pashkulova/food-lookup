import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import ServerErrorModal from "./ServerErrorModal";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createFoodItem } from "../api/foodService";
import validateFormInput from "../helpers/formValidation";
import useForm from "../custom-hooks/useForm";
import useModal from "../custom-hooks/useModal";

const formInitialState = {
  description: "",
  kcal: "",
  protein: "",
  fat: "",
  carbs: "",
};

function CreateFoodPage() {
  const navigate = useNavigate();

  const { formValues, onChangeHandler } = useForm(formInitialState);

  //error message for each form input; client-side validation
  const [errors, setErrors] = useState({});

  //errors connecting with server
  const { isShowing, toggle } = useModal();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //validate before making a request
    const formErrors = validateFormInput(formValues);
    setErrors(formErrors);

    //prevent request if there are errors
    if (Object.keys(formErrors).length) return;

    createFoodItem(formValues)
      .then(() => navigate("/"))
      .catch((err) => toggle());
  };

  return (
    <>
      <ServerErrorModal errorOccured={isShowing} handleClose={toggle} />
      <Container className="mt-4 w-50">
        <h3>Create Food Item</h3>
        <Form noValidate onSubmit={handleFormSubmit} className="mt-4">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formValues.description}
                onChange={onChangeHandler}
                isInvalid={!!errors.description}
                placeholder="Enter description"
              />
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
                value={formValues.kcal}
                onChange={onChangeHandler}
                isInvalid={!!errors.kcal}
                placeholder="Enter kcal"
              />
              <Form.Control.Feedback type="invalid">
                {errors.kcal}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="protein">
              <Form.Label>Protein</Form.Label>
              <Form.Control
                type="number"
                name="protein"
                value={formValues.protein}
                onChange={onChangeHandler}
                isInvalid={!!errors.protein}
                placeholder="Enter grams of protein"
              />
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
                value={formValues.fat}
                onChange={onChangeHandler}
                isInvalid={!!errors.fat}
                placeholder="Enter grams of fat"
              />
              <Form.Control.Feedback type="invalid">
                {errors.fat}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="carbs">
              <Form.Label>Carbs</Form.Label>
              <Form.Control
                type="number"
                name="carbs"
                value={formValues.carbs}
                onChange={onChangeHandler}
                isInvalid={!!errors.carbs}
                placeholder="Enter grams of carbs"
              />
              <Form.Control.Feedback type="invalid">
                {errors.carbs}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button className="me-2" variant="primary" type="submit">
            Create
          </Button>
          <Button as={Link} to="/" variant="primary" type="button">
            Back
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateFoodPage;
