import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
