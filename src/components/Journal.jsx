/* eslint-disable no-console */

import { useContext } from "react/cjs/react.development"
import AppContext from "./AppContext"

const Journal = () => {
  const { amountList, totIncome, totOutcome } = useContext(AppContext)
  console.log(amountList)

  return (
    <table>
      <thead>
        <tr>
          <th>INCOMING</th>

          <th>OUTGOING</th>
        </tr>
      </thead>
      <tbody>
        {amountList.map(({ description, price }, id) => (
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
          <p>total INCOME: {totIncome} </p>
          <p>total Outcome:{totOutcome} </p>
        </tr>
        <tr>
          <p>{totIncome + totOutcome} €</p>
        </tr>
      </tbody>
    </table>
  )
}
export default Journal
