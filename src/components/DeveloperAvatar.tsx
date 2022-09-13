import styled from "styled-components";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import Image from "next/image";

const Container = styled.div`
  ${boxProperty(remsize(150), remsize(150), "auto", remsize(3), `#333333`)};
  border-radius: ${remsize(20)} 3px;
  box-shadow: 1px 1px 5px;
  margin-bottom: 45px;
  position: relative;
  img {
    border-radius: ${remsize(20)} 0px;
  }
`;

const DeveloperAvatar = () => (
  <Container id="developerAvatar">
    <Image src="/casmir.png" alt="" layout="fill" />
  </Container>
);

export default DeveloperAvatar;
