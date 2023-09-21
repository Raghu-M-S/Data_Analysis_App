import DataRow from "./DataRow";

// Define the props for the DataTable component
interface DataTableProps {
  data: DataItem[];
}

// Define the structure of a single data item
interface DataItem {
  Class: number;
  Flavanoids: number;
  Gamma: number;
}

// DataTable component that displays statistical measures for Flavanoids and Gamma
function DataTable({ data }: DataTableProps) {
  // Helper function to filter data by class
  const filterDataByClass = (dataArray: DataItem[], classValue: number) => {
    return dataArray.filter((item) => item.Class === classValue);
  };

  // Calculate mean, median, and mode for Flavanoids and Gamma for each class
  const class1Data = filterDataByClass(data, 1);
  const class2Data = filterDataByClass(data, 2);

  // Helper function to calculate mean for a specific property
  const calculateMean = (dataArray: DataItem[], property: keyof DataItem) => {
    const sum = dataArray.reduce((acc, curr) => acc + curr[property], 0);
    return sum / dataArray.length;
  };

  // Helper function to calculate median for a specific property
  const calculateMedian = (dataArray: DataItem[], property: keyof DataItem) => {
    const sortedArray = dataArray
      .map((item) => item[property])
      .sort((a, b) => a - b);
    const middle = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
      return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
      return sortedArray[middle];
    }
  };

  // Helper function to calculate mode for a specific property
  const calculateMode = (dataArray: DataItem[], property: keyof DataItem) => {
    const counts: { [key: number]: number } = {};
    dataArray.forEach((item) => {
      counts[item[property]] = (counts[item[property]] || 0) + 1;
    });

    let mode: number | null = null;
    let maxCount = 0;

    for (const key in counts) {
      if (counts[key] > maxCount) {
        mode = parseFloat(key);
        maxCount = counts[key];
      }
    }

    return mode;
  };

  // Calculate statistical measures for Flavanoids for both classes
  const meanClass1Flavanoids = calculateMean(class1Data, "Flavanoids").toFixed(
    3
  );
  const meanClass2Flavanoids = calculateMean(class2Data, "Flavanoids").toFixed(
    3
  );
  const medianClass1Flavanoids = calculateMedian(
    class1Data,
    "Flavanoids"
  ).toFixed(3);
  const medianClass2Flavanoids = calculateMedian(
    class2Data,
    "Flavanoids"
  ).toFixed(3);
  const modeClass1Flavanoids = calculateMode(class1Data, "Flavanoids");
  const modeClass2Flavanoids = calculateMode(class2Data, "Flavanoids");

  // Calculate statistical measures for Gamma for both classes
  const meanClass1Gamma = calculateMean(class1Data, "Gamma").toFixed(3);
  const meanClass2Gamma = calculateMean(class2Data, "Gamma").toFixed(3);
  const medianClass1Gamma = calculateMedian(class1Data, "Gamma").toFixed(3);
  const medianClass2Gamma = calculateMedian(class2Data, "Gamma").toFixed(3);
  const modeClass1Gamma = calculateMode(class1Data, "Gamma");
  const modeClass2Gamma = calculateMode(class2Data, "Gamma");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        width: "50%",
        flexDirection:"column"
      }}
    >
      <table>
        <caption>Flavanoids Statistics</caption>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
          </tr>
        </thead>
        <tbody>
          <DataRow
            name="Flavanoids Mean"
            value1={meanClass1Flavanoids}
            value2={meanClass2Flavanoids}
          />
          <DataRow
            name="Flavanoids Median"
            value1={medianClass1Flavanoids}
            value2={medianClass2Flavanoids}
          />
          <DataRow
            name="Flavanoids Mode"
            value1={modeClass1Flavanoids}
            value2={modeClass2Flavanoids}
          />
        </tbody>
      </table>

      <table>
        <caption>Gamma Statistics</caption>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
          </tr>
        </thead>
        <tbody>
          <DataRow
            name="Gamma Mean"
            value1={meanClass1Gamma}
            value2={meanClass2Gamma}
          />
          <DataRow
            name="Gamma Median"
            value1={medianClass1Gamma}
            value2={medianClass2Gamma}
          />
          <DataRow
            name="Gamma Mode"
            value1={modeClass1Gamma ?? "N/A"}
            value2={modeClass2Gamma ?? "N/A"}
          />
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
