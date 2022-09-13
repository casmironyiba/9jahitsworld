import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import themes from '../components/Themes'

const Button = styled.button`
  ${boxProperty(remsize(145), remsize(40), remsize(5), "auto", "silver")};
  border-radius: 10px 0px;
  border: none;
  box-shadow: 1px 1px 1px;
  letter-spacing: ${remsize(3)};
  color: ${themes.$white};
  font-weight: 600;
`;
export const Gobackbutton = styled(Button)`
  ${boxProperty(remsize(90), remsize(30))}
  background: ${themes.$dark};
  color: white;
`;
export const LogoutButton = styled(Button)`
  ${boxProperty(remsize(100), remsize(30))};
  background: ${themes.$dark};
`;
export default Button;
