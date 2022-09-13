import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import WhatsApp from "@mui/icons-material/WhatsApp";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";

const Container = styled.div`
  ${boxProperty(remsize(500), remsize(200), `20px auto`, remsize(10))};
`;
const Div = styled.div`
  ${boxProperty(`100%`, remsize(150), `10px auto`)};
  ${displayFlex(`space-around`, "center", `column nowrap`)};
`;

const H4 = styled.h4`
  ${boxProperty(`100%`, remsize(20))};
  margin-top: ${remsize(5)};
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1.5px;
`;
const H6 = styled.h6`
  font-size: 0.9rem;
`;

const A = styled.a`
  ${boxProperty(remsize(100), remsize(25))};
  ${displayFlex(`space-around`, "center", `row nowrap`)};
  text-decoration: none;
`;

const ContactDeveloper = () => (
  <Container id="contactDeveloper">
    <H4>You can contact as follows;</H4>
    <Div>
      <A href="#">
        <H6>Facebook</H6>
        <Facebook fontSize="small" />
      </A>

      <A href="#">
        <H6>WhatsApp</H6>
        <WhatsApp fontSize="small" />
      </A>
      <A href="#">
        <H6>Twitter</H6>
        <Twitter fontSize="small" />
      </A>
      <A href="#">
        <H6>YouTube</H6>
        <YouTube fontSize="small" />
      </A>
    </Div>
  </Container>
);

export default ContactDeveloper;
