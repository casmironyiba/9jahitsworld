import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
//import displayFlex from "../fp/displayFlex";

const theme = {
  $white: "white",
  $dark: "#333333",
  $light: "#eeeeee",
  $green: "green",
  $palevioletred: "palevioletred",
};

const UserForm = styled.form`
  ${boxProperty(remsize(350), remsize(350), ` 50px auto`, "", theme.$white)};
  border-radius: ${remsize(30)} 0px;
  box-shadow: ${remsize(5)} ${remsize(5)} ${remsize(5)};

  & > h4 {
    ${boxProperty(`100%`, remsize(30), "auto", remsize(12), theme.$dark)};
    color:${theme.$white};
    text-align: center;
    letter-spacing: ${remsize(2)};
    border-radius: ${remsize(30)} 0px 0px;
    margin-left: auto;
  };


  }
`;

export default UserForm;
