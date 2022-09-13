import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";

const theme = {
  $light: "#eeeeee",
  $dark: "#333333",
  $white: "white",
};

const Form = styled.form`
  ${mediaQueries("mobileS")(`
  ${boxProperty(remsize(250), remsize(250), " 50px auto", "", theme.$light)};
  border-radius: ${remsize(30)} ${remsize(0)};
  box-shadow: ${remsize(5)} ${remsize(5)} ${remsize(5)};
  ${displayFlex("space-between", "center", "column nowrap")};
  position:relative;

  input {
    &:first-child {
      border:1px solid ${theme.$dark};
      padding:${remsize(3)}
    };
    width:${remsize(170)}
  }

  h4 {
    ${boxProperty("100%", remsize(30), `auto`, remsize(12), theme.$dark)};
    color: ${theme.$white};
    text-align: center;
    letter-spacing: ${remsize(2)};
    border-radius: ${remsize(30)} 0px 0px;
    margin-left: auto;
  }

  div {
    ${boxProperty(`100%`, `90%`, "auto", remsize(10))};
    ${displayFlex(`space-around`, "center", `column nowrap`)}

  }
  div#goBackButton__container {
    ${boxProperty(remsize(90), remsize(25))}
    margin-left:auto;
    position:relative;
    top:${remsize(14)};
  }
  `)}
`;

export default Form;
