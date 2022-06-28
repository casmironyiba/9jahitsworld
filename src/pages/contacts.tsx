import styled from "styled-components";
import Footer from "../templates/Footer";
import Main from "../templates/Main";
import Header from "../templates/Header";
import boxProperty from "../fp/BoxProperty";
import Layout from "../components/Layout";
import NavLinkTemplates from "../templates/NavLinkTemplates";
import MandateAvatar from "../templates/MandateAvatar";
import ContactsME from "../components/ContactsME";
import { mediaQueries } from "../fp/MediaQueries";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import GoBackButton from "../components/GoBackButton";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(1400))};
    ${displayFlex(`space-between`, "center", `column nowrap`)};
  #goBackButton {
    margin-top: ${remsize(30)};
  }
  `)};
`;

const Contacts = () => {
  return (
    <Container id="contacts">
      <Header />
      <Main>
        <NavLinkTemplates>
          <MandateAvatar />
          <ContactsME />
          <GoBackButton />
        </NavLinkTemplates>
      </Main>
      <Footer />
    </Container>
  );
};

export default Contacts;
