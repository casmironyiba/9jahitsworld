import styled from "styled-components";
import Footer from "../templates/Footer";
import Main from "../templates/Main";
import Header from "../templates/Header";
import Layout from "../components/Layout";
import boxProperty from "../fp/BoxProperty";
import NavLinkTemplates from "../templates/NavLinkTemplates";
import MandateAvatar from "../templates/MandateAvatar";
import OurServices from "../components/OurServices";
import AboutME from "../components/AboutMe";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import dispalyFlex from "../fp/DisplayFlex";
import GoBackButton from "../components/GoBackButton";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(1400))};
    ${dispalyFlex(`space-between`, `center`, `column nowrap`)};
  #goBackButton {
    margin-top: ${remsize(25)};
    height:${remsize(45)};
  }
  `)}
`;

const Div = styled.div`
  ${boxProperty(`100%`, remsize(600))};
  box-shadow: ${remsize(1)} ${remsize(1)} ${remsize(5)};
`;

const Services = () => (
  <Container id="services">
    <Header />
    <Main>
      <NavLinkTemplates>
        <MandateAvatar />
        <Div>
          <AboutME />
          <OurServices />
        </Div>
        <GoBackButton />
      </NavLinkTemplates>
    </Main>
    <Footer />
  </Container>
);

export default Services;
