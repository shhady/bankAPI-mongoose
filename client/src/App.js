import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Users from "./Components/users/users";
import Form from "./Components/form/form";
export default function App() {
  const [form, setForm] = useState({});

  const onChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value });

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    postData("http://localhost:8000/users", form).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Create Account</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <form
          method={"POST"}
          action={"http://localhost:8000"}
          onSubmit={handleSubmit}
        >
          <input
            onChange={onChange}
            type="text"
            name={"firstName"}
            placeholder={"firstName"}
          />
          <input
            onChange={onChange}
            type="text"
            name={"lastName"}
            placeholder={"lastName"}
          />
          <input
            onChange={onChange}
            type="text"
            name={"passportID"}
            placeholder={"passportID"}
          />
          <input
            onChange={onChange}
            type="text"
            name={"cash"}
            placeholder={"cash"}
          />
          <input
            onChange={onChange}
            type="text"
            name={"credit"}
            placeholder={"credit"}
          />
          <button>submit</button>
        </form>
      </div>
      <div>
        <Users />
      </div>
    </div>
  );
}
