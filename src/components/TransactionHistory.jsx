import "./TransactionHistory.css";

const TransactionHistory = ({items}) => {
	return (
<table className="transaction__table">
	<thead>
    	<tr className="transition__title">
			<th>Type</th>
			<th>Amount</th>
			<th>Currency</th>
    	</tr>
	</thead>

	<tbody>
		{items.map(({id, type, amount, currency}) => (
			<tr key={id}>
				<td>{type}</td>
				<td>{amount}</td>
				<td>{currency}</td>
			</tr>
		))}
	</tbody>
</table>
)
}

export default TransactionHistory;