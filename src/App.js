import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Data from "./data";
export default function App() {
  const allData = Data.map((x) => <Main key={x.title} data={x} />);
  return (
    <div>
      <Navbar />
      {allData}
    </div>
  );
}
