import styled from "styled-components";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import Image from "next/image";

const theme = {
  $dark: "#333333",
};

const Container = styled.div`
  ${boxProperty(remsize(150), remsize(150), "auto", remsize(3), theme.$dark)};
  border-radius: ${remsize(20)} ${remsize(3)};
  box-shadow: ${remsize(1)} ${remsize(1)} ${remsize(5)};
  margin-bottom: ${remsize(45)};
  position: relative;
  img#avatar {
    border-radius: ${remsize(20)} 0px;
  }
`;

const MandateAvatar = () => (
  <Container id="mandateAvatar">
    <Image src="/mandate1.jpg" alt="mandate" id="avatar" layout="fill" />
  </Container>
);

export default MandateAvatar;
