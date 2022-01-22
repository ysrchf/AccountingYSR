import { AppContextProvider } from "../src/components/AppContext"
import Dashboard from "../src/components/Dashboard"
import Layout from "../src/components/Layout"

const Home = () => {
  return (
    <Layout content="Dashboard">
      <AppContextProvider>
        <Dashboard />
      </AppContextProvider>
    </Layout>
  )
}
export default Home
