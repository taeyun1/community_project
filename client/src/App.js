import React, { useState } from "react";

import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Heading from "./Components/Heading";
import List from "./Components/Post/List";
import Upload from "./Components/Post/Upload";
import Test from "./Test";

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route
          path="/"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
