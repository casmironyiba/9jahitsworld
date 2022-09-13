import React from "react";
import Link from "next/link";
import styled from "styled-components";
import UserForm from "./UserForm";

const Container = styled(UserForm)``;

const LoginUserForm = (props: any) => (
  <Container id="loginUserForm" onSubmit={props.loginHandler}>
    <h4>Login Page</h4>
    <div>{props.children}</div>
    <Link href="/register">Register</Link>
  </Container>
);
export default LoginUserForm;
