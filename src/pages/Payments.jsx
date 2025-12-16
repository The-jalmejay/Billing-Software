function Payments({ payments }) {
  return (
    <div className="page">
      <h2>Payments</h2>

      <table>
        <tbody>
          {payments.map((p, i) => (
            <tr key={i}>
              <td>{p.customer}</td>
              <td>₹{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;
