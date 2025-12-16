import { useState } from "react";
import "../styles/Invoices.css";
function Invoices({
  customers,
  products,
  setProducts,
  invoices,
  setInvoices,
  setPayments,
}) {
  const [customer, setCustomer] = useState("");
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState([]);

  const selectedProduct = products.find((p) => p.id == productId);

  const addItem = () => {
    if (!selectedProduct || qty <= 0) return;

    const existingItem = items.find((i) => i.id === selectedProduct.id);

    const alreadyQty = existingItem ? existingItem.qty : 0;

    if (alreadyQty + qty > selectedProduct.stock) {
      alert("Not enough stock");
      return;
    }

    if (existingItem) {
      setItems(
        items.map((i) =>
          i.id === selectedProduct.id
            ? {
                ...i,
                qty: i.qty + qty,
                total: (i.qty + qty) * i.price,
              }
            : i
        )
      );
    } else {
      setItems([
        ...items,
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          qty,
          total: selectedProduct.price * qty,
        },
      ]);
    }

    setProductId("");
    setQty(1);
  };

  const grandTotal = items.reduce((sum, i) => sum + i.total, 0);

  const createInvoice = () => {
    if (!customer || items.length === 0) return;

    setInvoices([
      ...invoices,
      {
        id: Date.now(),
        customer,
        items,
        total: grandTotal,
      },
    ]);

    setPayments((p) => [...p, { customer, amount: grandTotal }]);

    setProducts(
      products.map((p) => {
        const used = items.find((i) => i.id === p.id);
        return used ? { ...p, stock: p.stock - used.qty } : p;
      })
    );

    setCustomer("");
    setItems([]);
  };

  return (
    <div className="page">
      <h2>Create Invoice</h2>

      <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
        <option value="">Select Customer</option>
        {customers.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <div className="form-row">
        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} (Stock: {p.stock})
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />

        <button onClick={addItem}>Add Product</button>
      </div>

      {items.length > 0 && (
        <div className="data-list" style={{ marginTop: "15px" }}>
          <div
            className="data-row data-header"
            style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
          >
            <div>Product</div>
            <div>Price</div>
            <div>Qty</div>
            <div>Total</div>
          </div>

          {items.map((i, idx) => (
            <div
              className="data-row"
              key={idx}
              style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
            >
              <div>{i.name}</div>
              <div>₹{i.price}</div>
              <div>{i.qty}</div>
              <div>₹{i.total}</div>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginTop: "15px" }}>Grand Total: ₹{grandTotal}</h3>

      <button onClick={createInvoice} style={{ marginTop: "10px" }}>
        Create Invoice
      </button>
    </div>
  );
}

export default Invoices;
