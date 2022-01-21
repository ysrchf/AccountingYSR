import { useContext } from "react/cjs/react.development"
import AppContext from "./AppContext"

const Journal = () => {
  const { amountList, totIncome, totOutcome } = useContext(AppContext)

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border-2 w-1/2 p-2">INCOMING</th>

          <th className="border-2 w-1/2 p-2">OUTGOING</th>
        </tr>
      </thead>
      <tbody>
        {amountList.map(({ description, price }, id) => (
          <tr
            key={id}
            className={`${id % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            {price > 0 ? (
              <>
                <td className="border-2 w-1/2 p-2">
                  <p className="text-green-400 font-medium">+{price}$</p>
                  <p className="break-all italic ">{description}</p>
                </td>
                <td className="border-2 w-1/2 p-2"></td>
              </>
            ) : (
              <>
                <td className="border-2 w-1/2 p-2"></td>
                <td className="border-2 w-1/2 p-2">
                  <p className="text-red-400 font-medium">{price}$</p>
                  <p className="break-all italic">{description}</p>
                </td>
              </>
            )}
          </tr>
        ))}
        <tr>
          <td className="border-2 w-1/2 p-2">
            <p>total INCOME:</p>
            <p className="text-green-400 font-bold"> +{totIncome}$</p>
          </td>
          <td className="border-2 w-1/2 p-2">
            <p>total Outcome:</p>
            <p className="text-red-400 font-bold">{totOutcome}$</p>
          </td>
        </tr>
        <tr>
          <td className="border-2 w-full p-2" colSpan="2">
            <p>TOTAL:</p>
            <p
              className={`${
                totIncome + totOutcome > 0
                  ? "text-green-400 font-bold"
                  : "text-red-400 font-bold"
              }`}
            >
              {totIncome + totOutcome} $
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
export default Journal
