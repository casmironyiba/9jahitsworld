import styled from "styled-components";
import Link from "next/link";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";

const theme = {
  $palevioletred: "palevioletred",
  $white: "white",
};

const Container = styled.div`
  background: yellow;
  ${boxProperty(
    remsize(100),
    remsize(30),
    ``,
    remsize(8),
    theme.$palevioletred
  )};
  color: ${theme.$white};
  display: inline-block;
  letter-spacing: ${remsize(3)};
  font-size: 1rem;
  position: relative;
  a {
    text-decoration: none;
    position: absolute;
  }
`;

const RegisterLink = () => (
  <Container id="loginLink">
    {" "}
    <Link href="/register">Register</Link>
  </Container>
);
export default RegisterLink;
