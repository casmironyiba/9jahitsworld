import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";

const Container = styled.div`
  ${boxProperty(`100%`, `100%`)};
  box-sizing: border-box;
  grid-area: m;
  background: LInear-gradient(to right, grey, purple, brown);
  //background-image: url("bg4.jpg");
  //background-size: container;
  //background-position: cover;
  //background-repeat: no-repeat;
  //background: red;
`;
const Main = (props: any) => <Container id="main">{props.children}</Container>;
export default Main;
