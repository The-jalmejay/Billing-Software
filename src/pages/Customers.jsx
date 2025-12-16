import { useState } from "react";
import '../styles/Customers.css';

function Customers({ customers, setCustomers }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addCustomer = () => {
    setCustomers([...customers, { id: Date.now(), name, phone }]);
    setName(""); setPhone("");
  };

  const deleteCustomer = id => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div className="page">
      <h2>Customers</h2>

      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={addCustomer}>Add</button>

      <table>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => deleteCustomer(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
