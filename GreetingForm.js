import React, { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default GreetingForm;
