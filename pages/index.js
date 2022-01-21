/* eslint-disable no-console */
import { useContext } from "react"
import AppContext, { AppContextProvider } from "../src/components/AppContext"
import Journal from "../src/components/Journal"
import Layout from "../src/components/Layout"

const Home = () => {
  const { amountList } = useContext(AppContext)
  console.log(amountList)

  

  return (
    <Layout>
      <AppContextProvider>
        <Journal amountList={amountList} />
      </AppContextProvider>
    </Layout>
  )
}
export default Home
