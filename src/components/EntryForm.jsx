import { Field, Form, Formik } from "formik"
import { useCallback } from "react"
import { useContext } from "react/cjs/react.development"
import * as Yup from "yup"
import AppContext from "./AppContext"
import Input from "./Input"

const EntryForm = () => {
  const displayingErrorMessagesSchema = Yup.object().shape({
    description: Yup.string().required("Le champ est requis !"),
    price: Yup.number()
      .typeError("Le champ doit être un nombre !")
      .test(
        "Is not equal to 0 ?",
        "La valeur ne doit pas être égale à 0 !",
        (price) => price != 0
      )
      .required("Le champ est requis !"),
  })

  const { addAmountList } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addAmountList({
        description: values.description,
        price: parseInt(values.price),
      })
      resetForm()

      return true
    },
    [addAmountList]
  )

  return (
    <Formik
      initialValues={{ description: "", price: "0" }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors }) => (
        <Form>
          <label>
            Description:
            <Field
              name="description"
              placeholder="Enter a description"
              as={Input}
            />
            <div className="errorField">{errors.description}</div>
          </label>
          <br />
          <label>
            Price:
            <Field name="price" placeholder="Enter the amount" as={Input} />
            <div className="errorField">{errors.price}</div>
          </label>
          <button type="submit">Add Entry</button>
        </Form>
      )}
    </Formik>
  )
}

export default EntryForm
