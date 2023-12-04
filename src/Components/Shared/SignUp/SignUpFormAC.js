import React, { Component } from "react";
import "./signup.scss";
import { SignUpContainer, FormRow, StyledResponse } from "../../styles.js";

class ActiveCampaignSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
      staticform: {
        u: 1,
        f: 1,
        s: null,
        c: 0,
        m: 0,
        v: 2,
        act: "sub",
      },

      firstname: null,
      lastname: null,
      email: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  handleFirstName = (e) => {
    this.setState({ firstname: e.target.value });
  };
  handleLastName = (e) => {
    this.setState({ lastname: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    // console.log('mydata',this.state.formSubmitted);
    fetch(
      `https://brellaproductions.activehosted.com/proc.php?u=7&f=7&s=&c=0&m=0&act=sub&v=2&fullname=${this.state.firstname} ${this.state.lastname}&email=${this.state.email}&jsonp=true`,
      {
        method: "GET",
        mode: "no-cors",
      }
    )
      .then((response) => {
        this.setState({ formSubmitted: true });
        // setTimeout(() => {
        //     this.setState({ formSubmitted: false });
        // }, 5000);
      })
      .catch((error) => console.log("Request failed", error));
  }

  render() {
    const { formSubmitted } = this.state;

    return (
      <div>
        {formSubmitted && (
          <SignUpContainer>
            <div className="row">
              <div className="col-lg-12 pt-5 signup">
                <StyledResponse>
                  {" "}
                  Huzzah! You’re now subscribed to receive Brella’s monthly
                  newsletter, Under the Brella. Welcome aboard.
                </StyledResponse>
              </div>
            </div>
          </SignUpContainer>
        )}

        {!formSubmitted && (
          <SignUpContainer>
            <div className="row card-message">
              <div className="col-lg-12 pt-5 signup">
                <p className="signup_title">
                  Like what you see? Get to know us a little better.
                </p>
                <p className="signup_text">
                  We have lots of things to talk about. Subscribe to our blog
                  and follow us on social media.
                </p>
              </div>
              <div className="col-md-12 pb-0 pt-3 px-3">
                <FormRow className="form" onSubmit={this.onSubmit}>
                  <div>
                    <label>First Name</label>
                    <input
                      name="firstname"
                      required
                      type="text"
                      onChange={this.handleFirstName}
                    />
                    <span className="error"></span>
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      name="lastname"
                      required
                      type="text"
                      onChange={this.handleLastName}
                    />
                    <span className="error"></span>
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      name="email"
                      required
                      type="text"
                      onChange={this.handleEmail}
                    />
                    {/*{errors ? errors: null}*/}
                    <span className="error"></span>
                  </div>
                  <div>
                    <button className="signup_button">SIGN ME UP!</button>
                  </div>
                </FormRow>
              </div>
            </div>
          </SignUpContainer>
        )}
      </div>
    );
  }
}

export default ActiveCampaignSignupForm;
