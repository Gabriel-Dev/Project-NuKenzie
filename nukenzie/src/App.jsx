import { useState } from "react";
import "./App.css";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";

function App() {
  const [page, setPage] = useState(false);
  return (
    <div className="App">
      {!page ? (
        <Home onClick={() => setPage(!page)} />
      ) : (
        <Dashboard onClick={() => setPage(!page)} />
      )}
    </div>
  );
}

export default App;
