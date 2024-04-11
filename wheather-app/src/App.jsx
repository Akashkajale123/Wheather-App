import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { React, useState } from "react";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState({});

  return (
    <>
      <Router>
        <Header setData={setData} data={data} />
        <Routes >
          <Route path="/" element={<Home data={data} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
