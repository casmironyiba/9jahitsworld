import styled from "styled-components";
import remsize from "../fp/Remsize";
import BoxProperty from "../fp/BoxProperty";

const theme = {
  $silver: "silver",
  $white: "white",
};

const SubmitButton = styled.button`
  ${BoxProperty(remsize(145), remsize(40), remsize(5), "auto", theme.$silver)};
  border-radius: 10px 0px;
  border: none;
  box-shadow: 1px 1px 1px;
  letter-spacing: ${remsize(3)};
  color: ${theme.$white};
  font-weight: 600;
`;

export default SubmitButton;
