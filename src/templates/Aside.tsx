import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: a;
  background: red;
`;

const Aside = () => <Container id="aside">Aside</Container>;

export default Aside;
