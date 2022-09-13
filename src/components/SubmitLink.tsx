import styled from "styled-components";
import Link from "next/link";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";

const theme = {
  $palevioletred: "palevioletred",
  $white: "white",
};

const Container = styled.div`
  a {
    ${boxProperty(
      remsize(100),
      remsize(30),
      ``,
      remsize(10),
      theme.$palevioletred
    )};
    color: ${theme.$white};
    text-decoration: none;
    display: inline-block;
    letter-spacing: ${remsize(3)};
    font-size: 1rem;
    margin: -10px 0px 0px 70%;
  }
`;

const SubmitLink = () => (
  <Container>
    {" "}
    <Link href="/login">Submit</Link>
  </Container>
);
export default SubmitLink;
