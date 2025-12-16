import '../styles/Dashboard.css';

function Dashboard({ customers, products, invoices }) {
  const totalSales = invoices.reduce((sum, i) => sum + i.total, 0);

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h4>Total Customers</h4>
          <p>{customers.length}</p>
        </div>
        <div className="stat-card">
          <h4>Total Sales</h4>
          <p>₹{totalSales}</p>
        </div>
      </div>

      <h3>Stock</h3>
      <div className="stock-list">
        {products.map(p => (
          <div className="stock-item" key={p.id}>
            <div className="product-name">{p.name}</div>
            <div className="product-stock">{p.stock}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
