import { useState } from "react";
import '../styles/Products.css';

function Products({ products, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [editId, setEditId] = useState(null);
  const [deleted, setDeleted] = useState(null);

  const clearForm = () => {
    setEditId(null);
    setName("");
    setPrice("");
    setStock("");
  };

  const addProduct = () => {
    if (!name || !price || !stock) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name,
        price: Number(price),
        stock: Number(stock)
      }
    ]);

    clearForm();
  };

  const startEdit = (p) => {
    setEditId(p.id);
    setName(p.name);
    setPrice(p.price);
    setStock(p.stock);
  };

  const saveEdit = () => {
    setProducts(
      products.map(p =>
        p.id === editId
          ? { ...p, name, price: Number(price), stock: Number(stock) }
          : p
      )
    );
    clearForm();
  };

  const deleteProduct = (product) => {
    setDeleted(product);
    setProducts(products.filter(p => p.id !== product.id));
    setTimeout(() => setDeleted(null), 10000);
  };

  const undoDelete = () => {
    setProducts([...products, deleted]);
    setDeleted(null);
  };

  return (
    <div className="page">
      <h2>Products</h2>

      <div className="form-row">
        <input placeholder="Product name" value={name} onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} />

        {editId ? (
          <>
            <button onClick={saveEdit}>Save</button>
            <button onClick={clearForm}>Cancel</button>
          </>
        ) : (
          <button onClick={addProduct}>Add Product</button>
        )}
      </div>

      {deleted && (
        <button onClick={undoDelete}>
          Undo delete ({deleted.name})
        </button>
      )}

      <div className="data-list">
        <div className="data-row data-header">
          <div>Product</div>
          <div>Price (₹)</div>
          <div>Stock</div>
          <div>Actions</div>
        </div>

        {products.map(p => (
          <div className="data-row" key={p.id}>
            <div>{p.name}</div>
            <div>{p.price}</div>
            <div>{p.stock}</div>
            <div className="row-actions">
              <button onClick={() => startEdit(p)}>Edit</button>
              <button onClick={() => deleteProduct(p)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
