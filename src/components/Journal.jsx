const Journal = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>INCOMING</th>
          <th>OUTGOING</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data +</td>
          <td>data -</td>
        </tr>
        <tr>
          <td>total +</td>
          <td>total -</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>Result</tr>
      </tfoot>
    </table>
  )
}
export default Journal
