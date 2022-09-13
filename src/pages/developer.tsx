import styled from "styled-components";
import Footer from "../templates/Footer";
import Main from "../templates/Main";
import Header from "../templates/Header";
import Layout from "../components/Layout";
import boxProperty from "../fp/BoxProperty";
import NavLinkTemplates from "../templates/NavLinkTemplates";
import DeveloperAvatar from "../components/DeveloperAvatar";
import AboutDeveloper from "../components/AboutDeveloper";
import ContactDeveloper from "../components/ContactDeveloper";
import displayFlex from "../fp/DisplayFlex";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import GoBackButton from "../components/GoBackButton";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(1400))};
    ${displayFlex(`space-between`, "center", `column nowrap`)};
  #goBackButton {
    margin-top: ${remsize(25)};
  }
  `)};
`;
const Div = styled.div`
  ${boxProperty(`95%`, remsize(350))};
  box-shadow: ${remsize(1)} ${remsize(1)} ${remsize(5)};
`;

const Developer = () => {
  return (
    <Container id="developer">
      <Header />
      <Main>
        <NavLinkTemplates>
          <DeveloperAvatar />
          <Div>
            <AboutDeveloper />
            <ContactDeveloper />
          </Div>
          <GoBackButton />
        </NavLinkTemplates>
      </Main>
      <Footer />
    </Container>
  );
};

export default Developer;
