import EntryForm from "../src/components/EntryForm"
import Layout from "../src/components/Layout"
import { AppContextProvider } from "../src/components/AppContext"

const Entry = () => {
  return (
    <AppContextProvider>
      <Layout content="Add Entry">
        <EntryForm />
      </Layout>
    </AppContextProvider>
  )
}
export default Entry
