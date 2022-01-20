import { useContext } from "react"
import AppContext from "./AppContext"

const Journal = () => {
  const { amountList } = useContext(AppContext)
  
  return (
    <table>
      <thead>
        <tr>
          <th>INCOMING</th>
          <th>OUTGOING</th>
        </tr>
      </thead>
      <tbody>
        {amountList.map(({ id, description, price }) => (
          <tr key={id}>
            {price > 0 ? (
              <td>
                <p>{price}</p>
                <p>{description}</p>
              </td>
            ) : (
              <>
                <td></td>
                <td>
                  <p>{price}</p>
                  <p>{description}</p>
                </td>
              </>
            )}
          </tr>
        ))}
        <tr>
          <td>total +</td>
          <td>total -</td>
        </tr>
        <tr>
          <td>Result</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Journal
