import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";

const theme = {
  $dark: "#333333",
  $white: "white",
};

const Button = styled.button`
  ${boxProperty(remsize(145), remsize(40), remsize(5), "auto", "silver")};
  border-radius: 10px 0px;
  border: none;
  box-shadow: 1px 1px 1px;
  letter-spacing: ${remsize(3)};
  color: ${theme.$white};
  font-weight: 600;
`;
export const Gobackbutton = styled(Button)`
  ${boxProperty(remsize(90), remsize(30))}
  background: ${theme.$dark};
  color: white;
`;
export const LogoutButton = styled(Button)`
  ${boxProperty(remsize(100), remsize(30))};
  background: ${theme.$dark};
`;
export default Button;
