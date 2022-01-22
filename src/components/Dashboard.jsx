import { useContext } from "react"
import AppContext from "./AppContext"

const Journal = () => {
  const { amountList, totIncome, totOutcome } = useContext(AppContext)

  return (
    <table className="w-full mb-5">
      <thead className="bg-black text-white drop-shadow-md">
        <tr>
          <th className="border-2 w-1/2 p-2">INCOMING</th>

          <th className="border-2 w-1/2 p-2">OUTGOING</th>
        </tr>
      </thead>
      <tbody>
        {amountList.map(({ description, amount }, id) => (
          <tr
            key={id}
            className={`${id % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            {amount > 0 ? (
              <>
                <td className="border-2 w-1/2 p-2">
                  <p className="text-green-400 font-medium">+{amount}$</p>
                  <p className="break-all capitalize italic pl-5">
                    {description}
                  </p>
                </td>
                <td className="border-2 w-1/2 p-2"></td>
              </>
            ) : (
              <>
                <td className="border-2 w-1/2 p-2"></td>
                <td className="border-2 w-1/2 p-2">
                  <p className="text-red-400 font-medium">{amount}$</p>
                  <p className="break-all capitalize italic pl-5">
                    {description}
                  </p>
                </td>
              </>
            )}
          </tr>
        ))}
        <tr>
          <td className="border-2 w-1/2 p-2 font-bold text-right">
            <p>Total Income:</p>
            <p className="text-green-400"> +{totIncome}$</p>
          </td>
          <td className="border-2 w-1/2 p-2 font-bold text-right">
            <p>Total Outcome:</p>
            <p className="text-red-400">{totOutcome}$</p>
          </td>
        </tr>
        <tr>
          <td className=" w-full border-2 p-2 font-bold text-right" colSpan="2">
            <p className="w-full underline underline-offset-1 decoration-dashed">
              TOTAL:
            </p>
            <p
              className={`${
                totIncome + totOutcome > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {totIncome + totOutcome}$
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
export default Journal
