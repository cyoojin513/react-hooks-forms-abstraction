import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    admin: false
  });

  function handleChange(e) {
    const name = e.target.name
    if (e.target.type === "checkbox") {
      e.target.value = e.target.checked;
    }
    setFormData({
      ...formData,
      [name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" onChange={handleChange}/>
      <input type="text" name="lastname" onChange={handleChange}/>
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
