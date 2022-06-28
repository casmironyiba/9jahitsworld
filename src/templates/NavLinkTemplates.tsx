import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import displayFlex from "../fp/DisplayFlex";
import boxProperty from "../fp/BoxProperty";

const theme = {
  $dark: "#333333",
  $light: "#eeeeee",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`97%`, remsize(650), `50px auto`, remsize(30), theme.$dark)};
    border-radius: ${remsize(90)} 0px;
    box-shadow: ${remsize(3)} ${remsize(3)} ${remsize(3)};
    opacity:1;

    `)}

  ${mediaQueries(`tablet`)(`
    width:${remsize(600)};
    `)}

  ${mediaQueries(`laptop`)(`
    width: ${remsize(700)};
                         `)}
`;

const Div = styled.div`
  ${displayFlex(`space-between`, `center`, `column nowrap`)};
  ${boxProperty("100%", remsize(590), `auto`, remsize(10), theme.$light)};
  border-radius: ${remsize(50)} 0px;
  z-index: 5;
`;

const NavLinkTemplates = (props: any) => (
  <Container id="navLinksTemplates">
    <Div>{props.children}</Div>
  </Container>
);

export default NavLinkTemplates;
