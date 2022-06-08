import React from "react";

const TableComponent = function (props) {
  return (
    <table>
      <ul>
        {props.sendingUser.map((item, i) => {
          return <li>{item}</li>;
        })}
      </ul>
    </table>
  );
};
export default TableComponent;
