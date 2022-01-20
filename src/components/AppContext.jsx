import { createContext, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [amountList, setAmounts] = useState([
    {
      id: 1,
      price: 1200,
      description: "Test 1",
    },
    {
      id: 2,
      price: -200,
      description: "Test 2",
    },
    {
      id: 3,
      price: -400,
      description: "Test 3",
    },
    {
      id: 4,
      price: 600,
      description: "Test 4",
    },
  ])

  return (
    <AppContext.Provider
      {...props}
      value={{
        amountList,
      }}
    />
  )
}

export default AppContext
