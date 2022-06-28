import WhatsApp from "@mui/icons-material/WhatsApp";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/WhatsApp";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";

const Container = styled.div`
  ${boxProperty(remsize(500), remsize(300), `left`, remsize(5))};
  ${displayFlex(`space-around`, "center", `column nowrap`)};
  box-shadow: 1px 1px 5px;
`;

const H4 = styled.h4`
  font-size: 1.5rem;
  letter-spacing: 1.2px;
`;
const H6 = styled.h6`
  font-size: 0.9rem;
`;

const A = styled.a`
  ${boxProperty(remsize(100), remsize(30))};
  ${displayFlex(`space-around`, "center", `row nowrap`)};
  text-decoration: none;
`;

const ContactsME = () => (
  <Container id="contactsMe">
    <H4> You can contact me as follows</H4>
    <A href="https://web.facebook.com/messages/t/100002194951758">
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
  </Container>
);

export default ContactsME;
