import React from "react";
import Cell from "./Cell";

// const Row = ({ item }) => {
//   return (
//     <tr>
//       {Object.entries(item).map(([key, value]) => {
//         return <Cell key={key} cellData={JSON.stringify(value)} />;
//       })}
//     </tr>
//   );
// };

// export default Row;

const Row = ({ item }) => {
  const renderCellData = (item) => {
    if (typeof item === "object" && !Array.isArray(item)) {
      return (
        <ul>
          {Object.entries(item).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>
              {renderCellData(value)}
            </li>
          ))}
        </ul>
      );
    } else {
      return <span>{JSON.stringify(item)}</span>;
    }
  };

  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={renderCellData(value)} />;
      })}
    </tr>
  );
};

export default Row;
