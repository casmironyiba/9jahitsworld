import React, { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import Input from "../fp/Input";
import { mediaQueries } from "../fp/MediaQueries";

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
