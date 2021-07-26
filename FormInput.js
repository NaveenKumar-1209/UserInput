import React from "react";
import "./FormInput.css";
import useInput from "./static/use-input";

const InputForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const isPassward = (value) => value.length >= 5;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredPassward,
    isValid: enteredPasswardIsValid,
    hasError: passwardInputHasError,
    valueChangeHandler: passwardChangeHandler,
    inputBlurHandler: passwardBlurHandler,
    reset: resetPasswardInput,
  } = useInput(isPassward);

  let formIsValid = false;
  // let EmailInputHasErrorMessage = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswardIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredPasswardIsValid) {
      return;
    }
    console.log("submitted");
    console.log({ enteredName, enteredEmail, enteredPassward });

    resetNameInput();
    resetEmailInput();
    resetPasswardInput();
  };
  return (
    <div className="MainBody">
      <h3 className="title">Registration</h3>
      <form onSubmit={formSubmissionHandler}>
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="FirstName">Full Name</label>
            <input
              type="text"
              id="FullName"
              placeholder="Enter your full name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Name must not be empty
              </p>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="Email">Email ID</label>
            <input
              type="text"
              id="Email"
              placeholder="Enter your email id"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Enter a valid Email id
              </p>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="Passward">Passward</label>
            <input
              type="Passward"
              id="Passward"
              placeholder="Enter your passward"
              onChange={passwardChangeHandler}
              onBlur={passwardBlurHandler}
              value={enteredPassward}
            />
            {passwardInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Enter a valid passward
              </p>
            )}
          </div>
        </div>

        <div className="btn">
          <button disabled={!formIsValid}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
