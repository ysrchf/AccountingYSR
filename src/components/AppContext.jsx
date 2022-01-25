import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

const save = (amountList) => {
  localStorage.setItem("amountList", JSON.stringify(amountList))
}

export const AppContextProvider = (props) => {
  const [amountList, setAmountList] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [totIncome, setTotIncome] = useState(0)
  const [totOutcome, setTotOutcome] = useState(0)

  const addAmountList = useCallback((amount) => {
    setAmountList((currentAmountList) => [...currentAmountList, { ...amount }])
  }, [])

  useEffect(() => {
    const amount = localStorage.getItem("amountList")

    if (!amount) {
      setLoaded(true)

      return
    }

    const amountList = JSON.parse(amount)

    setAmountList(amountList)
    setLoaded(true)
  }, [])

  useEffect(() => {
    const totIncome = amountList.reduce((previous, current) => {
      if (current.amount > 0) {
        return Number(previous) + Number(current.amount)
      }

      return Number(previous) + 0
    }, 0)

    setTotIncome(totIncome)
  }, [amountList])

  useEffect(() => {
    const totOutcome = amountList.reduce((previous, current) => {
      if (current.amount < 0) {
        return Number(previous) + Number(current.amount)
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
