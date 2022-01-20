import EntryForm from "../src/components/EntryForm"
import Layout from "../src/components/Layout"
import AppContext, { AppContextProvider } from "../src/components/AppContext"
import { useContext } from "react"

const Entry = () => {
  const { addEntry } = useContext(AppContext)

  return (
    <Layout>
      <AppContextProvider>
        <EntryForm onSubmit={addEntry} />
      </AppContextProvider>
    </Layout>
  )
}
export default Entry
