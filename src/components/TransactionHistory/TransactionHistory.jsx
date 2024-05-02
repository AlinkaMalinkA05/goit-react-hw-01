import css from "/src/components/TransactionHistory/TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
    return (
        <table className={css.tableWrapper}>
  <thead>
    <tr className={css.tableHeader}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, amount, currency, type}) =>
    <tr key={id}> 
        <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)}
  </tbody>
</table>

    )
    
}