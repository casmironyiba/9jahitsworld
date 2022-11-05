import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import theme from "./Themes";

const Container = styled.div`
  a {
    ${boxProperty(`100%`, remsize(30), remsize(5))};
    ${displayFlex(`center`, "center")};
    &:last-child {
      width: 100%;
    }
  }
  a:hover {
    #homeIcon {
      color: ${theme.$red};
    }
  }
`;

const HomeLink = () => (
  <Container>
    <a href="/">
      <HomeIcon sx={{ color: theme.$white }} id="homeIcon" />
    </a>
  </Container>
);
export default HomeLink;
