import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
//import { useCallback } from "react"

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

  //const { onSubmit } = props
  //const handleFormSubmit = useCallback(
  /*({ description, price }, { resetForm }) => {
      onSubmit({ description, price })
      resetForm()

      return true
    },
    [onSubmit]
  )*/
  return (
    <Formik
      initialValues={{ description: "", price: "0" }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit}>
          <label>
            Description:
            <Field
              name="description"
              placeholder="Enter a description"
              as="textarea"
            />
            <div className="errorField">{errors.description}</div>
          </label>
          <br />
          <label>
            Price:
            <Field name="price" placeholder="Enter the amount" />
            <div className="errorField">{errors.price}</div>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add Entry
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default EntryForm
