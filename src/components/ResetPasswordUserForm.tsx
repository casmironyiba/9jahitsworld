import React from "react";
import NavLink from "next/link";
import styled from "styled-components";
import UserForm from "./UserForm";

const Container = styled(UserForm)``;

const ResetPasswordUserForm = (props: any) => (
  <Container id="resetPasswordUserForm" onSubmit={props.resetPasswordHandler}>
    <h4>Reset Password</h4>
    <div>{props.children}</div>
    <NavLink href="/login">Login</NavLink>
  </Container>
);

export default ResetPasswordUserForm;
