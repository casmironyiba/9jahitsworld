import styled from "styled-components";
import Hamburger from "../components/Hamburger";
import displayFlex from "../fp/DisplayFlex";
import NavBar from "./NavBar";
import Logo from "./Logo";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $black: "black",
  $lightGreen: "lightgreen",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
  grid-area: h;
  ${boxProperty(`100%`, remsize(156), 0, 0, theme.$lightGreen)};
                          `)};
`;

const DIV = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${displayFlex(`space-between`, "center", `column nowrap`)};
    ${boxProperty(`100%`, `25%`)};
    background:#20232a;

    `)}
`;
const LogoContainer = styled.div`
  ${boxProperty(`50%`, `75%`)}
  margin: auto;
  ${displayFlex(`center`, `center`)};
`;

const Header = () => (
  <Container id="header">
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <DIV>
      <Hamburger />
      <NavBar />
    </DIV>
  </Container>
);

export default Header;
