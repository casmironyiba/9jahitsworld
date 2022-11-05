import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";

const theme = {
  $green: "green",
  $white: "white",
};

const Container = styled.div`
  a {
    ${boxProperty(`100%`, remsize(30), remsize(5))};
    ${displayFlex(`center`, "center")};
    &:last-child {
      width: 100%;
    }
  }
  a:hover {
    color: ${theme.$green};
  }
`;

const HomeLink = () => (
  <Container>
    <a href="/">
      <HomeIcon sx={{ color: theme.$white }} />
    </a>
  </Container>
);
export default HomeLink;
