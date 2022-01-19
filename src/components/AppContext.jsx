import { createContext, useCallback, useState } from "react"

const AppContext = createContext({})

const AppContextProvider = (props) => {
  const [lastEntryId, setLastEntryId] = useState(0)
  const [entryList, setEntryList] = useState([])

  const addEntry = useCallback(
    (entry) => {
      setLastEntryId((currentLastEntryId) => currentLastEntryId + 1)
      setEntryList((currentEntryList) => [
        ...currentEntryList,
        {
          id: lastEntryId + 1,
          ...entry,
        },
      ])
    },
    [lastEntryId]
  )
 
  return (
    <AppContext.Provider
      {...props}
      value={{
        entryList: entryList || [],
        addEntry,
      }}
    />
  )
}

export default AppContext
