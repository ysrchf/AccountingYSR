import { AppContextProvider } from "../src/components/AppContext"
import Dashboard from "../src/components/Dashboard"
import Layout from "../src/components/Layout"

const Home = () => {
  return (
    <AppContextProvider>
      <Layout content="Dashboard">
        <Dashboard />
      </Layout>
    </AppContextProvider>
  )
}
export default Home
