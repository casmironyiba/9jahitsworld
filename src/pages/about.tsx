import styled from "styled-components";
import Header from "../templates/Header";
import Main from "../templates/Main";
import Footer from "../templates/Footer";
import boxProperty from "../fp/BoxProperty";
import Layout from "../components/Layout";
import MandateAvatar from "../templates/MandateAvatar";
import OurServices from "../components/OurServices";
import NavLinkTemplates from "../templates/NavLinkTemplates";
import AboutME from "../components/AboutMe";
import remsize from "../fp/Remsize";
import dispalyFlex from "../fp/DisplayFlex";
import { mediaQueries } from "../fp/MediaQueries";
import GoBackButton from "../components/GoBackButton";
const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(1400))};
    ${dispalyFlex(`space-between`, `center`, `column nowrap`)};
  `)}
  #goBackButton {
    margin-top: ${remsize(30)};
  }
`;

const Div = styled.div`
  ${boxProperty(`95%`, remsize(350))};
  box-shadow: ${remsize(1)} ${remsize(1)} ${remsize(5)};
`;

const About = () => (
  <Container id="about">
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

export default About;
