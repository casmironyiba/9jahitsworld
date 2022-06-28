import React, { FC, useEffect, useRef, useState } from "react";
import ForgotPasswordUserForm from "../components/ForgotPasswordUserForm";
import axios from "axios";
import styled from "styled-components";
import BoxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import DisplayFlex from "../fp/DisplayFlex";
import SubmitButton from "../components/SubmitButton";

const theme = {
  $light: "#eeeeee",
  $dark: "#333333",
};
const Div = styled.div`
  ${BoxProperty(`100%`, remsize(90), `auto`, remsize(5), theme.$light)};

  ${DisplayFlex(`space-between`, "center", `column nowrap`)};
  & input {
    ${BoxProperty(`100%`, remsize(40), `auto`, remsize(10))};
    outline-color: black;
    outline-offset: -2px;
    font-size: 1.7rem;
  }
  & button {
  }
`;

const ForgotPasswordArticle: FC = () => {
  const [email, setEmail] = useState<any>("");
  const [error, setError] = useState<any>("");
  const [success, setSuccess] = useState("");

  const emailRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const emailKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log("Form Submitted");
  };

  const forgotPasswordHandler = async (event: any) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response: any = await axios.post(
        `/api/auth/forgotPassword`,
        { email },
        config
      );
      setSuccess(response.data);
      console.log(response.data);
    } catch (error) {
      setError((error as any).response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    console.log(email);
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  console.log(success);
  return (
    <ForgotPasswordUserForm
      id="forgotPasswordUserForm"
      onSubmit={forgotPasswordHandler}
    >
      {error && <span>{error}</span>}
      <Div>
        <input
          type="email"
          placeholder="email"
          name="email"
          onKeyDown={emailKeyDown}
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton
          onClick={forgotPasswordHandler}
          type="button"
          ref={submitRef}
          onKeyDown={submitKeyDown}
          id="submitButton"
        >
          Submit Email
        </SubmitButton>
      </Div>
    </ForgotPasswordUserForm>
  );
};

export default ForgotPasswordArticle;
