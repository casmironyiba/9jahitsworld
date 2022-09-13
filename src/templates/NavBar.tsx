import React, { FC, useRef } from "react";
import styled from "styled-components";
import NavLinks from "../components/NavLinks";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $dark: "#333333",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    @keyframes navbarAnimation {
      0% {
        right: 100vw;
      }
      100% {
        right:0;

      }
    }
    ${boxProperty(remsize(100), remsize(200), 0, 0, theme.$dark)};
    position: relative;
    margin-right: auto;
    display:none;
    &.open {
      display:inline-block;
      animation:navbarAnimation .5s ease-in-out forwards;
    }
                            `)};
  ${mediaQueries(`laptop`)(`
    ${boxProperty(`30%`, `100%`)}
    margin-left:auto;
    display:block;
    background:none;

                           
`)};
`;

const NavBar: FC = () => {
  const navbarRef = useRef(null);
  return (
    <Container ref={navbarRef} id="navbar">
      <NavLinks />
    </Container>
  );
};
export default NavBar;
