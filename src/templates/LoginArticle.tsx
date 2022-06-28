import { useEffect, useRef, useState } from "react";
import useInput from "../fp/UseInput";
import UserForm from "../components/UserForm";
import Button from "../components/Button";
import Axios from "axios";
import useRouter from "next/router";
import RegisterLink from "../components/RegisterLink";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import displayFlex from "../fp/DisplayFlex";
import SubmitButton from "../components/SubmitButton";

const theme = {
  $lightGreen: "lightgreen",
  $white: "white",
  $palevioletred: "palevioletred",
  $dark: "#333333",
  $light: "#eeeeee",
};

const Container = styled(UserForm)``;

const Div = styled.div`
  ${boxProperty(`100%`, `65%`, `auto`, remsize(10), theme.$light)};
  ${displayFlex(`space-around`, "center", "column nowrap")};

  & > input {
    margin-top: ${remsize(10)};
  }
`;

const Error = styled.div`
${boxProperty(`100%`, remsize(40), `auto`, remsize(10), theme.$lightGreen)};

div {
  ${displayFlex(`center`, `center`)};
  color:{theme.$white};
  margin-top:5px;
  font-size:1rem;
  letter-spacing:3px;
}
`;

const Register = styled.div`
  ${boxProperty(`100%`, remsize(52), `auto`, remsize(10), theme.$dark)};
  border-radius: 0px 0px 25px 0px;

  & > div {
    & > span {
      width: 100%;
      height: ${remsize(40)};
      ${displayFlex("space-around", "center", "row nowrap")};
      font-size: 1rem;
      color: ${theme.$white};
    }
  }
`;

const LoginArticle = () => {
  const [email, resetEmail, bindEmail] = useInput("");
  const [password, resetPassword, bindPassword] = useInput("");
  const [error, setError] = useState("");

  const history = useRouter;

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const emailKeyDown = (event: any) => {
    if (event.key === "Enter") return passwordRef.current.focus();
  };

  const passwordKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log("Form Submitted");
  };

  const loginHandler = async (event: any) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await Axios.post(
        `/api/auth/login`,
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/admin");
    } catch (error: any) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 5000);
    }

    (function () {
      resetEmail();
      resetPassword();
    })();
  };

  useEffect(() => {
    emailRef?.current.focus();
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, []);

  return (
    <Container id="loginArticle" onSubmit={loginHandler}>
      <h4>Login Page</h4>
      <Error> {error && <div>{error}</div>} </Error>
      <Div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onKeyDown={emailKeyDown}
          ref={emailRef}
          {...bindEmail}
          required
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          ref={passwordRef}
          onKeyDown={passwordKeyDown}
          {...bindPassword}
          required
        />
        <SubmitButton ref={submitRef} onKeyDown={submitKeyDown}>
          Submit
        </SubmitButton>
      </Div>
      <Register>
        <div>
          <span>
            Or Create New Account ? <RegisterLink />
          </span>
        </div>
      </Register>
    </Container>
  );
};

export default LoginArticle;
