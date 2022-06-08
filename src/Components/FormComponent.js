import React from "react";
import { useState } from "react";

const FormComponent = function ({ handleOnAddUser }) {
  const [userName, setUserName] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUserName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnAddUser(userName);
  };
  console.log(userName);
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <p>
          <input type="text" onChange={handleOnChange} />
        </p>

        <p>
          <button type="submit">Add User</button>
        </p>
      </form>
    </div>
  );
};
export default FormComponent;
