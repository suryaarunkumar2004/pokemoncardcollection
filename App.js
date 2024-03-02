import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./component/home"; // Updated import statement


function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px 0", width: "100%" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ display: "inline", marginRight: 20 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff", fontWeight: "bold", transition: "all 0.3s ease" }}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return <h1 style={{ color: "#333" }}>Home Component</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" /> {/* Updated Route element */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
