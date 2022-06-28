import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Axios from "axios";
import UserForm from "../components/UserForm";
import Link from "next/link";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import LoginLink from "../components/LoginLink";
import SubmitButton from "../components/SubmitButton";

const theme = {
  $white: "white",
  $dark: "#333333",
  $light: "#eeeeee",
  $lightGreen: "lightgreen",
  $palevioltred: "palevioletred",
};

const Container = styled(UserForm)``;
const Div = styled.div`
  ${boxProperty(`100%`, `65%`, `auto`, remsize(10), theme.$light)};
  ${displayFlex("space-around", "center", `column nowrap`)};

  & > input {
    margin-top: ${remsize(10)};
  }
`;
const Error = styled.div`
  ${boxProperty(`100%`, remsize(40), `auto`, remsize(10), theme.$lightGreen)};

  div {
    ${displayFlex("center", "center")};
    color: ${theme.$white};
    margin-top: 5px;
    font-size: 1rem;
    letter-spacing: 3px;

    span {
    }
  }
`;

const Login = styled.div`
  ${boxProperty(`100%`, remsize(52), `auto`, remsize(0), theme.$dark)};
  border-radius: 0px 0px 25px 0px;

  & > div {
    & > span {
      width: 100%;
      height: ${remsize(50)};
      ${displayFlex("space-around", "center", `row nowrap`)};
      font-size: 1rem;
      color: ${theme.$white};
      letter-spacing: 1.5px;
    }
  }
`;

const RegisterArticle = ({ useRouter }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useRouter;

  const usernameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const comfirmPasswordRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  //                   keydown starts
  const usernameKeyDown = (event: any) => {
    if (event.key === "Enter") return emailRef.current.focus();
  };

  const emailKeyDown = (event: any) => {
    if (event.key === "Enter") return passwordRef.current.focus();
  };

  const passwordKeyDown = (event: any) => {
    if (event.key === "Enter") return comfirmPasswordRef.current.focus();
  };

  const comfirmPasswordKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };
  const submitKeyDown = (event: any) => {
    if (event === "Enter") console.log(`User Submited`);
  };
  //                           keydown ends

  const registerHandler = async (event: any) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== comfirmPassword) {
      setPassword("");
      setComfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await Axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      //setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }

    (function () {
      setUsername("");
      setEmail("");
      setPassword("");
      setComfirmPassword("");
    })();
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <Container id="registerArticle" onSubmit={registerHandler}>
      <h4>Register Page</h4>
      <Error>{error && <div>{error}</div>}</Error>
      <Div>
        <input
          type="text"
          placeholder="username"
          name="username"
          ref={usernameRef}
          onKeyDown={usernameKeyDown}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={emailRef}
          onKeyDown={emailKeyDown}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={passwordRef}
          onKeyDown={passwordKeyDown}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <input
          type="password"
          placeholder="comfirm password"
          name="comfirmPassword"
          ref={comfirmPasswordRef}
          onKeyDown={comfirmPasswordKeyDown}
          onChange={(e) => setComfirmPassword(e.target.value)}
          value={comfirmPassword}
          required
        />
        <SubmitButton type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
          Register
        </SubmitButton>
      </Div>
      <Login>
        <div>
          <span>
            {" "}
            Already have an account ?<LoginLink />
          </span>
        </div>
      </Login>
    </Container>
  );
};
export default RegisterArticle;
