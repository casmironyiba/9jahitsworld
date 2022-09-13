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
    &:hover {
      background: ${theme.$green};
    }
  }
`;

const HomeLink = () => (
  <Container>
    <Link href="/">
      <HomeIcon sx={{ color: theme.$white }} />
    </Link>
  </Container>
);
export default HomeLink;
