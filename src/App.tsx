import DataTable from "./components/DataTable";
import { DataItem } from "./components/constants/DataItems";

interface DataItem {
  Class: number;
  Ash: number;
  Hue: number;
  Flavanoids: number;
  Magnesium: number;
  Gamma: number;
}

function App() {

  const data: DataItem[] = DataItem;

  return (
    <div className="App">
      <h1>Data Analysis</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
