import React from "react";
import NavLink from "next/link";
import styled from "styled-components";
import UserForm from "./UserForm";
import GoBackButton from "../components/GoBackButton";
import BoxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import DisplayFlex from "../fp/DisplayFlex";

const Container = styled(UserForm)``;

interface Prop {
  (onSubmit: any): any;
}

const Div = styled.div`
  ${BoxProperty("100%", remsize(40), "center", remsize(20), "#eeeeee")};
  ${DisplayFlex("space-between", "center", "row nowrap")}
`;

const ForgotPasswordUserForm: Prop = (props: any) => (
  <Container id="forgotPasswordUserForm" onSubmit={props.forgotPasswordHandler}>
    <h4>Forgot Password</h4>
    <div>{props.children}</div>
    <Div>
      <NavLink href="/login">Login</NavLink>
      <GoBackButton />
    </Div>
  </Container>
);

export default ForgotPasswordUserForm;
