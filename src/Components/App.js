import React from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import { useState } from "react";

const App = function () {
  const [users, setUsers] = useState(["Shara", "Billy", "Sam"]);

  // function created on parent comp to get data from child components
  const handleOnAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <FormComponent handleOnAddUser={handleOnAddUser} />
      <br />

      <TableComponent sendingUser={users} />
    </div>
  );
};
export default App;
