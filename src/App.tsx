import React from "react";
import DataTable from "./components/DataTable";

interface DataItem {
  Class: number;
  Ash: number;
  Hue: number;
  Flavanoids: number;
  Magnesium: number;
  Gamma: number;
}

function App() {
  const data: DataItem[] = [
    {
      Class: 1,
      Flavanoids: 1.5,
      Ash: 2.5,
      Hue: 0.6,
      Magnesium: 40,
      Gamma: 0.125,
    },
    {
      Class: 1,
      Flavanoids: 1.8,
      Ash: 2.3,
      Hue: 0.8,
      Magnesium: 42,
      Gamma: 0.143,
    },
    {
      Class: 2,
      Flavanoids: 2.2,
      Ash: 2.7,
      Hue: 0.7,
      Magnesium: 35,
      Gamma: 0.22,
    },
    {
      Class: 2,
      Flavanoids: 2.5,
      Ash: 2.6,
      Hue: 0.9,
      Magnesium: 38,
      Gamma: 0.122,
    },
  ];

  return (
    <div className="App">
      <h1>Data Analysis</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
