import { AppContextProvider } from "../src/components/AppContext"
import Journal from "../src/components/Journal"
import Layout from "../src/components/Layout"

const Home = () => {
  return (
    <Layout content="Dashboard">
      <AppContextProvider>
        <Journal />
      </AppContextProvider>
    </Layout>
  )
}
export default Home
