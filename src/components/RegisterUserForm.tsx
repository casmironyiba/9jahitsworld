import React, { NavLink } from "react-router-dom";
import styled from "styled-components";
import UserForm from "./userForm";

const Container = styled(UserForm)``;

interface Prop {
  (onSubmit: any): any;
}

const RegisterUserForm: Prop = (props: any) => (
  <Container id="registerUserForm" onSubmit={props.registerHandler}>
    <h4>Register Page</h4>
    <div>{props.children}</div>
    <NavLink to="/login">Login</NavLink>
  </Container>
);

export default RegisterUserForm;
