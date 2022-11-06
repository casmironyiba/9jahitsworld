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
`;

const MusicLink = () => (
  <Container>
    {" "}
    <Link href="/9jamusic">9jamusic</Link>{" "}
  </Container>
);
export default MusicLink;
