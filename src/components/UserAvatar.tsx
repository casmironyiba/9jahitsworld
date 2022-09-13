import React, { FC } from "react";
import styled from "styled-components";
import remsize from "../fp/remsize";
import boxProperty from "../fp/boxProperty";

const Container = styled.div`
  ${boxProperty(remsize(150), remsize(150), "auto", remsize(3), `#333333`)};
  border-radius: ${remsize(20)} 3px;
  box-shadow: 2px 2px 5px;
  img {
    ${boxProperty(`100%`, "100%")};
    border-radius: ${remsize(20)} 0px;
  }
`;

const UserAvatar: FC = (props: any) => {
  if (props.mandate)
    return (
      <Container id="userAvatar">
        <img src="mandate.jpg" alt="mandate" />
      </Container>
    );
  else
    return (
      <Container id="userAvatar">
        <img src="casmir.png" alt="developer" />
      </Container>
    );
};

export default UserAvatar;
