import Link from "next/link";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";

const theme = {
  $green: "green",
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

export default function GospelMusicLink() {
  return (
    <Container>
      <Link href="/gospel">Gospel</Link>{" "}
    </Container>
  );
}
