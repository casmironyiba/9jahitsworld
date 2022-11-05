import Link from "next/link";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import textProperty from "../fp/TextProperty";
import theme from "../components/Themes";

const Container = styled.div`
  grid-area: f;
  ${boxProperty("100%", remsize(200))};
  background: ${theme.$black};
  hr {
    display: block;
    ${boxProperty(`60%`, remsize(1), "auto")};
    border: ${remsize(1)} solid grey;
  }
`;

const UL = styled.div`
  ${boxProperty("50%", "60%", `${remsize(15)} auto`, remsize(10))};
  ${displayFlex(`space-around`, `center`, `row wrap`)};
  list-style: none;
`;

const LI = styled.li`
  margin: ${remsize(5)};
  font-family: geogia;
  ${textProperty(
    theme.$white,
    ".7rem",
    100,
    "center",
    "capitalize",
    remsize(4)
  )};
  a {
    text-decoration: none;
    color: ${theme.$white};
    transition: 0.4s linear;

    &:hover {
      color: ${theme.$red};
    }
  }
`;

const Footer = () => {
  return (
    <Container id="footer">
      <UL>
        <LI>
          <Link href="/about">About</Link>
        </LI>
        <LI>
          <Link href="/contacts">Contacts</Link>
        </LI>
        <LI>
          <Link href="/developer">Developer</Link>
        </LI>
        <LI>
          <Link href="/services">Services</Link>
        </LI>
      </UL>
      <hr />
    </Container>
  );
};

export default Footer;
