import EntryForm from "../src/components/EntryForm"
import Layout from "../src/components/Layout"
import { AppContextProvider } from "../src/components/AppContext"

const Entry = () => {
  return (
    <Layout>
      <AppContextProvider>
        <EntryForm />
      </AppContextProvider>
    </Layout>
  )
}
export default Entry
