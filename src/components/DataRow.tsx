import React from "react";

function DataRow({ name, value1, value2 }: any) {
  return (
    <tr>
      <td>{name}</td>
      <td>{value1}</td>
      <td>{value2}</td>
    </tr>
  );
}

export default DataRow;
