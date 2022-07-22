import React, { useState } from "react";

function Form() {
  const initialFormState = {
    firstname: "",
    lastname: "",
    admin: false
  }
  const [formData, setFormData] = useState(initialFormState);

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
    setFormData(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstname" 
        onChange={handleChange}
        value={formData.firstname}
      />
      <input 
        type="text" 
        name="lastname" 
        onChange={handleChange}
        value={formData.lastname}
      />
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
