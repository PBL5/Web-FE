import React, { useState } from "react";
import "./Signup.css";
import { Redirect } from "react-router-dom";
import validate from "../handleForm/validateInput";
import useForm from "../handleForm/useForm";
import { Navbar } from "../../..";

function Signin({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm({
    submitForm,
    validate,
  });

  const [signedIn, setSignedIn] = useState(false);

  const handleSignin = (e) => {
    fetch("bareurl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
      })
      .catch((error) => console.error(error, values));

    if (
      values.email === "ngochuyen@gmail.com" &&
      values.password === "password"
    ) {
      setSignedIn(true);
    }
  };

  if (signedIn) {
    return (
      <>
        <Navbar signedIn={signedIn} />
        <Redirect to="/fetchstudents" />
      </>
    );
  }

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {/* errors.email is true --> run <p> */}
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="form-input-btn" type="submit" onClick={handleSignin}>
          Sign in
        </button>
      </form>
    </div>
  );
}
export default Signin;

/* nếu sign in success thì truyền props cho Navbar: signin = true để thay đổi các element của navbar
    - thêm phần: Studentlist, username, signout;  bỏ phần sign in/up.
    */
// get data from backend --> auth user, setSignin = true --> send to Navbar
// get value from field --> check
