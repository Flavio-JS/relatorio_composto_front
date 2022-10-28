import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useState } from "react";

function App() {
  let [admData, setAdmData] = useState([
    {
      adm_cpf: "",
      name: "",
      loged: false,
    },
  ]);

  let url = "http://localhost";

  console.log("admData");
  console.log(admData);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Login setAdmData={setAdmData} url={url} admData={admData} />
            }
          ></Route>
          <Route path="/home" element={<Home admData={admData} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
