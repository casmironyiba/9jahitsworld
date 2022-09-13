import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import Menu from "@mui/icons-material/Menu";
import { mediaQueries } from "../fp/MediaQueries";
import getHTMLElement from "../fp/GetHTMLElement";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    margin-right:auto;
    z-index:8;

    #hamburger-menu {
      display:inline-block;
      &.open {
      display:none;

      }
    }

    #hamburger-toggle {
      display:none;
      &.open {
        display:inline-block;
        #hamburger{
          display:none;
        }
      }
    }
`)};

  ${mediaQueries(`laptop`)(`display:none`)};
`;

const Hambuger: FC = () => {
  const hamburgerRef = useRef<any>(null);
  useEffect(() => {
    const navbar = getHTMLElement("#navbar");
    const menu = getHTMLElement("#hamburger-menu");
    const menuToggle = getHTMLElement("#hamburger-toggle");
    navbar?.classList.add("navbar");
    hamburgerRef.current.addEventListener("click", () => {
      menuToggle?.classList.toggle("open");
      menu?.classList.toggle("open");
      navbar?.classList.toggle("open");
    });
  }, []);
  return (
    <Container id="hamburger" ref={hamburgerRef}>
      <Menu sx={{ color: "white", fontSize: 40 }} id="hamburger-menu" />
      <ClearIcon sx={{ color: "white", fontSize: 40 }} id="hamburger-toggle" />
    </Container>
  );
};
export default Hambuger;
