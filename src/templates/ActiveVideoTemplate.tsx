import React, { FC } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
//import { useParams } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
//import postRequest from "../fp/postRequest";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";

const theme = {
  $light: "#eeeeee",
};

const Container = styled(Layout)`
  height: ${remsize(1200)};
`;
const Div = styled.div`
  ${boxProperty(remsize(600), remsize(600), "auto", remsize(10), theme.$light)};
  margin-top: ${remsize(50)};
  box-shadow: 3px 3px 3px;
  border-radius: ${remsize(50)} 0px;
`;

const ActiveVideoTemplate: FC = () => {
  //const [activeVideo, setActiveVideo] = useState({});
  return (
    <Container id="activeVideoTemplate">
      <Header />
      <Main>
        <Div></Div>
      </Main>
      <Footer />
    </Container>
  );
};
export default ActiveVideoTemplate;
