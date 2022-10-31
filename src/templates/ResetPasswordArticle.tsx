import React, { useEffect, useRef, useState } from "react";
import NavLink from "next/link";
import ResetPasswordUserForm from "../components/ResetPasswordUserForm";
import axios from "axios";
const ResetPasswordArticle = ({ match }: any) => {
  const [password, setPassword] = useState("");
  const [comfirmPassowrd, setComfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const passwordRef = useRef<any>(null);
  const comfirmPasswordRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const passwordKeyDown = (event: any) => {
    if (event.key === "Enter") return comfirmPasswordRef.current.focus();
  };

  const comfirmPasswordKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log("Form Submitted");
  };

  const resetPasswordHandler = async (event: any) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== comfirmPassowrd) {
      setPassword("");
      setComfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetPassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );
      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      //setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  return (
    <ResetPasswordUserForm
      id="resetPasswordArticle"
      onSubmit={resetPasswordHandler}
    >
      {error && <span>{error}</span>}
      {success && (
        <span>
          {success} <NavLink href="/login"> </NavLink>
        </span>
      )}
      <input
        type="text"
        placeholder="Password"
        name="username"
        onKeyDown={passwordKeyDown}
        ref={passwordRef}
        onChange={(e) => e.target.value}
        required
      />

      <input
        type="text"
        placeholder="Comfirm Password"
        name="comfirmPassowrd"
        onKeyDown={comfirmPasswordKeyDown}
        ref={comfirmPasswordRef}
        onChange={(e) => e.target.value}
        required
      />
      <button type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
        Submit
      </button>
    </ResetPasswordUserForm>
  );
};

export default ResetPasswordArticle;
