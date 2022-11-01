import React, { FC, useEffect } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import Input from "../fp/Input";
import { mediaQueries } from "../fp/MediaQueries";
import SearchSharp from "@mui/icons-material/SearchSharp";
import theme from "../components/Themes";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`30%`)};
    z-index:3;

    input#searchInput {
     //display:none;
       background:red;
    }

    .open {
      input#searchInput {
     display:none;
     background:blue;

      }
    }
    `)}
  ${mediaQueries(`laptop`)(`
    margin-right:45%;
                           `)}
`;

const Search: FC = () => {
  useEffect(() => {
    const searchIcon = document.querySelector("#searchIcon");
    const searchInput = document.querySelector("#searchInput");
    searchIcon?.addEventListener("click", () => {
      //searchInput?.classList.add("casy");
      searchInput?.classList.toggle(".open");
    });
    console.log(searchInput);
  }, []);
  return (
    <Container id="search">
      <SearchSharp sx={{ color: theme.$white }} id="searchIcon" />
      <Input type="text" id="searchInput" className="searchInput" />
    </Container>
  );
};

export default Search;
