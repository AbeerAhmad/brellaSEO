import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <>
      <form onSubmit={{}}>
        <ContainForm>
          <TitleLineOne
            style={{
              color: "white",
              WebkitTextStroke: "1px #f3803b",
              OTextStroke: "1px #f3803b",
              MozTextStroke: "1px #f3803b",
            }}
          >
            HELLO!
          </TitleLineOne>
          <TitleLineTwo>
            <span>LET'S CONNECT.</span>
          </TitleLineTwo>

          <Form>
            <FormGroupLeft>
              <FormLeft>
                <Label>Name</Label>

                <InputLeft
                  type="text"
                  placeholder=""
                  name="name"
                  onChange={{}}
                  required
                />
              </FormLeft>
              <FormLeft>
                <Label>Company</Label>

                <InputLeft
                  type="text"
                  placeholder=""
                  name="company"
                  onChange={{}}
                  required
                />
              </FormLeft>
              <FormLeft>
                <Label>Email</Label>

                <InputLeft
                  type="text"
                  placeholder=""
                  name="email"
                  onChange={{}}
                  required
                />
              </FormLeft>

              <FormLeft>
                <Label>Phone</Label>

                <InputLeft
                  type="numbers"
                  placeholder=""
                  name="phone"
                  onChange={{}}
                  required
                />
              </FormLeft>
            </FormGroupLeft>
            <FormGroupRight>
              <FormRight>
                <Label>Message</Label>
                <InputLast
                  type="message"
                  placeholder=""
                  name="message"
                  onChange={{}}
                />
              </FormRight>
              {/* <FormRight>
                <CheckboxContainer>
                  <CheckBoxLabel>
                    <CheckBoxInput
                      type="checkbox"
                      name="subscribed"
                      value="Subscribe"
                      id="subscribed"
                      onChange={{}}
                    />
                    <CheckBoxIndicator />
                  </CheckBoxLabel>

                  <span
                    style={{
                      fontFamily: "FuturaStd-Condensed",
                      fontSize: "1.5rem",
                    }}
                  >
                    Subscribe to our Newsletter{" "}
                    <em style={{ color: "#f3803b" }}>Under The Brella</em>
                  </span>
                </CheckboxContainer>
              </FormRight> */}
              <FormRight>
                <div>
                  <RadioTitle>I'm interested in...</RadioTitle>

                  <RadioGroup>
                    <div>
                      <div className="radio">
                        <input
                          type="radio"
                          id="help"
                          name="gender"
                          value="How Brella can help my organization"
                          onChange={{}}
                          className="radio__control"
                        />

                        <label
                          htmlFor="help"
                          style={{
                            fontFamily: "FuturaStd-Condensed",
                            fontSize: "1.2rem",
                          }}
                        >
                          How Brella Can Help My Organization
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          id="fire"
                          name="gender"
                          value="Getting a quote ASAP - My project is on fire "
                          onChange={{}}
                          className="radio__control"
                        />
                        <label
                          htmlFor="fire"
                          style={{
                            fontFamily: "FuturaStd-Condensed",
                            fontSize: "1.2rem",
                          }}
                        >
                          Getting a Quote ASAP – My Project Is on Fire
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          id="team"
                          name="gender"
                          value="Joining the awesome Brella team "
                          onChange={{}}
                          className="radio__control"
                        />
                        <label
                          htmlFor="team"
                          style={{
                            fontFamily: "FuturaStd-Condensed",
                            fontSize: "1.2rem",
                          }}
                        >
                          Joining the Awesome Brella Team
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          id="join"
                          name="gender"
                          value="Becoming a beloved Brella Vendor/Supplier/Freelancer "
                          onChange={{}}
                          className="radio__control"
                        />
                        <label
                          htmlFor="join"
                          style={{
                            fontFamily: "FuturaStd-Condensed",
                            fontSize: "1.2rem",
                          }}
                        >
                          Becoming a Beloved Brella Vendor/Supplier/Freelancer
                        </label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </FormRight>
              <FormRight></FormRight>
            </FormGroupRight>
          </Form>
          <SubmitButton>
            <Submit>SEND EMAIL</Submit>
          </SubmitButton>
        </ContainForm>
      </form>
    </>
  );
};

const ContainForm = styled.div`
  position: relative;
  max-width: 1250px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-left: 80px;
  font-family: "FuturaStd-Condensed";
`;

const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 14px;
  font-family: "FuturaStd-Condensed";
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  color: #282828;
  padding: 20px 0;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
  grid-column-gap: 40px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
  input {
    padding: 7px 13.5px 8px 14px;
    width: 100%;
  }
  textarea {
    width: 100%;
  }
  input#subscribed {
    width: 0;
    height: 0;
    position: absolute;
    left: -99999px;
  }
`;

const FormGroupLeft = styled.div`
  display: grid;
  grid-template-rows: repeat(4, min-max(0, 1fr));
  height: auto;
`;

const FormGroupRight = styled.div`
  display: grid;
`;

const InputLeft = styled.input`
  width: 90%;
  color: #282828;
  height: 65px;
  border-radius: 5px;
  border: solid 2px #6c757d;
  background: white;
`;

// const CheckboxContainer = styled.div`
//   position: relative;
//   justify-content: start;
//   display: grid;
//   grid-template-columns: 0.1fr 0.9fr;
//   align-items: center;
//   position: relative;
//   padding-top: 25px;
//   width: 100%;
//   .ContactFormActiveCampagin__CheckBoxIndicator-ampvao-15 {
//     top: unset;
//     right: unset;
//   }

//   span {
//     color: #282828;
//     font-size: 16px;
//     display: inline-block;
//     text-transform: initial;
//     width: 77%;
//   }
// `;

const InputLast = styled.textarea`
  padding: 12px;
  width: 90%;
  height: 195px;
  border-radius: 5px;
  color: #282828;
  border: solid 2px #6c757d;
  background-blend-mode: overlay;
  background: white;
`;

const FormLeft = styled.div`
  color: black;
`;

const FormRight = styled.div`
  // margin-top: -20px;
`;

const TitleLineOne = styled.div`
  width: 123px;
  height: 37px;
  color: #fffffe;
  font-family: "FuturaStd-CondensedBold";
  margin: 15px 0;
  font-size: 42px;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  color: transparent;
`;
const TitleLineTwo = styled.div`
  width: 272px;
  font-size: 3rem;
  height: 37px;
  color: #282828;
  font-family: "FuturaStd-CondensedBold";
  margin-bottom: 5px;
  white-space: nowrap;
`;

const SubmitButton = styled.div`
  justify-content: right;
  display: flex;
  margin-top: 70px;

  button {
    background-color: #f3803b;
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 50px;
    font-family: "FuturaStd-CondensedBold";
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.2px;
    text-align: center;
    color: #fffffe;
    margin-left: auto;
  }
`;

// const CheckBoxInput = styled.input`
//   height: 0;
//   width: 0;
//   opacity: 0;
//   z-index: -1;
// `;

// const CheckBoxLabel = styled.label`
//   position: relative;
//   display: inline-flex;
//   align-items: flex-end;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   margin: 0;
// `;

// const rotate = keyframes`
//  from {
//     opacity: 0;
//     transform: rotate(0deg);
//   }
//   to {
//     opacity: 1;
//     transform: rotate(45deg);
//   }
// `;

// const CheckBoxIndicator = styled.div`
//   width: 2em;
//   height: 2em;
//   background: #d1d1d1;
//   position: relative;
//   display: inline-flex;
//   margin-right: 20px;
//   //border: 2px solid #282828;
//   border-radius: 10%;
//   position: relative;
//   ${CheckBoxInput}:not(:disabled):checked & {
//     background: #d1d1d1;
//   }

//   /* ${CheckBoxLabel}:hover & {
//     background: transparent;
//   } */

//   &::after {
//     content: "";
//     position: absolute;
//     display: none;
//   }

//   ${CheckBoxInput}:checked + &::after {
//     display: block;
//     top: 0.1em;
//     left: 0.6em;
//     width: 35%;
//     height: 70%;
//     border: solid #282828;
//     border-width: 0 0.2em 0.2em 0;
//     animation-name: ${rotate};
//     animation-duration: 0.3s;
//     animation-fill-mode: forwards;
//   }

//   &:disabled {
//     cursor: not-allowed;
//   }
// `;

const RadioTitle = styled.div`
  font-size: 2rem;
  // letter-spacing: -0.53px;
  color: #282828;
  // margin-top: 20px;
  font-family: "FuturaStd-Condensed";
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 40px;
  margin-left: 5px;
`;
const Submit = styled.button``;

const RadioGroup = styled.div`
  display: grid;

  color: #282828;
  .radio {
    display: grid;
    grid-template-columns: min-content auto;
    grid-gap: 0.5em;

    .radio__control {
      appearance: none;
      background-blend-mode: overlay;
      background: #d1d1d1;
      display: inline-block;
      height: 27px;
      width: 18px;
      border-radius: 50%;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .radio__control:checked {
      background: white;
      border-color: #f3803b;
      box-shadow: inset 0 0 0 8px #f3803b;
    }
  }

  lable {
    margin-bottom: 0;
  }
`;

export default ContactForm;
