import { Field, Form, Formik } from "formik"
import { useCallback } from "react"
import { useContext } from "react/cjs/react.development"
import * as Yup from "yup"
import AppContext from "./AppContext"

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
        <Form className="bg-gray-100 w-full">
          <label className="flex flex-col p-2 font-bold">
            Description:
            <Field
              name="description"
              placeholder="Enter a description"
              className="h-20 p-2 mb-2 mt-2"
              as="textarea"
            />
            <div
              className={`${
                errors.price
                  ? "popup text-red-600 bg-red-200 rounded-md w-1/3 p-2 font-medium"
                  : null
              }`}
            >
              {errors.description}
            </div>
          </label>
          <br />
          <label className="flex flex-col p-2 font-bold">
            Price:
            <Field
              className="p-2 mb-2 mt-2"
              name="price"
              placeholder="Enter the amount"
            />
            <div
              className={`${
                errors.price
                  ? "popup text-red-600 bg-red-200 rounded-md w-1/3 p-2 font-medium"
                  : null
              }`}
            >
              {errors.price}
            </div>
          </label>
          <button
            type="submit"
            className="p-2 w-full px-3 py-2 bg-black text-white font-medium"
          >
            Add Entry
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default EntryForm
