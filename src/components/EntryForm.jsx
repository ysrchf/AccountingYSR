import { Field, Form, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as Yup from "yup"
import AppContext from "./AppContext.jsx"

const EntryForm = () => {
  const { addAmountList } = useContext(AppContext)

  const displayingErrorMessagesSchema = Yup.object().shape({
    description: Yup.string()
      .max(15, "The description is too long, keep it short. (<15 characters)")
      .required("This field is required."),
    amount: Yup.number()
      .typeError("Enter a number please.")
      .test(
        "Amount zero ?",
        "The amount should be more than 0.",
        (amount) => amount != 0
      )
      .required("This field is required."),
  })

  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addAmountList({
        description: values.description,
        amount: Number(values.amount),
      })
      resetForm()

      return true
    },
    [addAmountList]
  )

  return (
    <Formik
      initialValues={{ description: "", amount: "0" }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors }) => (
        <Form className="bg-gray-100 w-full border-2">
          <label className="flex flex-col p-2 font-bold">
            Description:
            <Field
              name="description"
              placeholder="Enter a description"
              className="h-20 p-2 mb-2 mt-2 border-2"
              as="textarea"
            />
            <div
              className={`${
                errors.description
                  ? "popup text-red-600 bg-red-200 rounded-md w-1/3 p-2 font-medium"
                  : null
              }`}
            >
              {errors.description}
            </div>
          </label>
          <br />
          <label className="flex flex-col p-2 font-bold">
            Amount:
            <Field
              className="p-2 mb-2 mt-2 border-2"
              name="amount"
              placeholder="Enter the amount"
            />
            <div
              className={`${
                errors.amount
                  ? "popup text-red-600 bg-red-200 rounded-md w-1/3 p-2 font-medium"
                  : null
              }`}
            >
              {errors.amount}
            </div>
          </label>
          <button
            type="submit"
            className="p-2 w-full px-3 py-2 bg-black text-white hover:bg-gray-700 font-medium drop-shadow-md"
          >
            Add Entry
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default EntryForm
