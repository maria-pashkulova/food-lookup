import { useState } from "react";

const useForm = (initialValues) => {
  //save form input values
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // used for food item update
  const populateForm = (newValues) => {
    setFormValues(newValues);
  };

  return {
    formValues,
    onChangeHandler,
    populateForm,
  };
};

export default useForm;
