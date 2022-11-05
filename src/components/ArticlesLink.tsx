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
  }
`;

export default function ArticlesLink() {
  return (
    <Container>
      <Link href="/music">Articles</Link>{" "}
    </Container>
  );
}
