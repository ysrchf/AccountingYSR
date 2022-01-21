/* eslint-disable no-console */
import { AppContextProvider } from "../src/components/AppContext"
import Journal from "../src/components/Journal"
import Layout from "../src/components/Layout"

const Home = () => {
  return (
    <Layout>
      <AppContextProvider>
        <Journal />
      </AppContextProvider>
    </Layout>
  )
}
export default Home
