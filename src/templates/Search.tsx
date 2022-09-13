import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import Input from "../fp/input";
import { mediaQueries } from "../fp/mediaQueries";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`30%`)};
    z-index:3;
                            `)}
  ${mediaQueries(`laptop`)(`
    margin-right:45%;
                           `)}
`;

const Search: FC = () => (
  <Container id="search">
    <Input type="text" />
  </Container>
);

export default Search;
