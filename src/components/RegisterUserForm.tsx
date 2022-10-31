import NavLink from "next/link";
import styled from "styled-components";
import UserForm from "./UserForm";

const Container = styled(UserForm)``;

interface Prop {
  (onSubmit: any): any;
}

const RegisterUserForm: Prop = (props: any) => (
  <Container id="registerUserForm" onSubmit={props.registerHandler}>
    <h4>Register Page</h4>
    <div>{props.children}</div>
    <NavLink href="/login">Login</NavLink>
  </Container>
);

export default RegisterUserForm;
