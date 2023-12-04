import React, { useState } from "react";
import { FormRow, StyledResponse } from "../../Pages/Blog/StyledComponents.js";
import { useForm } from "react-hook-form";

import "./signup.scss";
import axios from "axios";

const SignUpForm = () => {
  const [isFetching, setFetching] = useState(false);
  const [message, setMessage] = useState(null);
  const submitEndpoint = process.env.REACT_APP_API_BRELLA_BLOG_SUBSCRIPTION;
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (e) => {
    if (errors.length) {
      console.log(errors);
    }
    try {
      const formData = new FormData();
      formData.append("firstname", e.firstname);
      formData.append("lastname", e.lastname);
      formData.append("email", e.email);

      setFetching(true);
      await axios
        .post(submitEndpoint, formData)
        .then((res) => {
          console.log("res", res);
          setMessage(
            "Huzzah! You’re now subscribed to receive Brella’s monthly newsletter, Under the Brella. Welcome aboard."
          );
          reset();
          setFetching(false);
          localStorage.setItem("subscribed", true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {message && (
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-5 signup">
              <StyledResponse> {message}</StyledResponse>
            </div>
          </div>
        </div>
      )}
      {localStorage.getItem("subscribed") === null && (
        <div className="container">
          <div className="row card-message">
            <div className="col-lg-12 pt-5 signup">
              <p className="signup_title">
                Like what you see? Get to know us a little better.
              </p>
              <p className="signup_text">
                We have lots of things to talk about. Subscribe to our blog and
                follow us on social media.
              </p>
            </div>
            <div className="col-md-12 pb-0 pt-3 px-3">
              <FormRow className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>First Name</label>
                  <input
                    name="firstname"
                    ref={register({ required: true, maxLength: 100 })}
                    type="text"
                  />
                  <span className="error">
                    {errors.firstname &&
                      errors.firstname.type === "required" &&
                      "First name is required"}
                    {errors.firstname &&
                      errors.firstname.type === "maxLength" &&
                      "Max 100 characters"}
                  </span>
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    name="lastname"
                    ref={register({ required: true, maxLength: 100 })}
                    type="text"
                  />
                  <span className="error">
                    {errors.lastname &&
                      errors.lastname.type === "required" &&
                      "Last name is required"}
                    {errors.lastname &&
                      errors.lastname.type === "maxLength" &&
                      "Max 100 characters"}
                  </span>
                </div>
                <div>
                  <label>Email</label>
                  <input
                    name="email"
                    ref={register({
                      required: true,
                      pattern: /^\S+@\S+$/,
                      maxLength: 100,
                    })}
                    type="text"
                  />
                  {/*{errors ? errors: null}*/}
                  <span className="error">
                    {errors.email &&
                      errors.email.type === "required" &&
                      "Email is required"}
                    {errors.email &&
                      errors.email.type === "pattern" &&
                      "Incorrect email"}
                    {errors.email &&
                      errors.email.type === "maxLength" &&
                      "Max 100 characters"}
                  </span>
                </div>
                <div>
                  <button disabled={isFetching} className="signup_button">
                    SIGN ME UP!
                  </button>
                </div>
              </FormRow>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
