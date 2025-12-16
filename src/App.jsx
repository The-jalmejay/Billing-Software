import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [customers, setCustomers] = useState([
    { id: 1, name: "Amit", phone: "9999999999" },
    { id: 2, name: "Ravi", phone: "8888888888" }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Pen", price: 10, stock: 100 },
    { id: 2, name: "Notebook", price: 50, stock: 40 }
  ]);

  const [invoices, setInvoices] = useState([]);
  const [payments, setPayments] = useState([]);

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />

      <div className={`content ${sidebarOpen ? "shift" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                customers={customers}
                products={products}
                invoices={invoices}
              />
            }
          />

          <Route
            path="/customers"
            element={{
              ...(
                <Customers
                  customers={customers}
                  setCustomers={setCustomers}
                />
              )
            }}
          />

          <Route
            path="/products"
            element={
              <Products
                products={products}
                setProducts={setProducts}
              />
            }
          />

          <Route
            path="/invoices"
            element={
              <Invoices
                customers={customers}
                products={products}
                setProducts={setProducts}
                invoices={invoices}
                setInvoices={setInvoices}
                setPayments={setPayments}
              />
            }
          />

          <Route
            path="/payments"
            element={<Payments payments={payments} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
