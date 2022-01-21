/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

const save = (amountList) => {
  localStorage.setItem("amountList", JSON.stringify(amountList))
}

export const AppContextProvider = (props) => {
  const [amountList, setAmounts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [totIncome, setTotIncome] = useState(0)
  const [totOutcome, setTotOutcome] = useState(0)

  const addAmountList = useCallback((amount) => {
    setAmounts((currentAmountList) => [...currentAmountList, { ...amount }])
  }, [])
  useEffect(() => {
    const amount = localStorage.getItem("amountList")

    if (!amount) {
      setLoaded(true)

      return
    }

    const amountList = JSON.parse(amount)

    setAmounts(amountList)
    setLoaded(true)
  }, [])

  useEffect(() => {
    let totIncome = amountList.reduce((previous, current) => {
      if (current.price > 0) {
        return Number(previous) + Number(current.price)
      }

      return Number(previous) + 0
    }, 0)

    setTotIncome(totIncome)
  }, [amountList])

  useEffect(() => {
    let totOutcome = amountList.reduce((previous, current) => {
      if (current.price < 0) {
        return Number(previous) + Number(current.price)
      }

      return Number(previous) + 0
    }, 0)

    setTotOutcome(totOutcome)
  }, [amountList])

  useEffect(() => {
    if (!loaded) {
      return
    }

    save(amountList)
  }, [loaded, amountList])

  return (
    <AppContext.Provider
      {...props}
      value={{
        amountList: amountList || [],
        addAmountList,
        totIncome,
        totOutcome,
      }}
    />
  )
}

export default AppContext
