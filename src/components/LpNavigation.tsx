import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import styled from "styled-components";
import textProperty from "../fp/TextProperty";
import remsize from "../fp/Remsize";
import Link from "next/link";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $blue: "blue",
  $red: "red",
  $green: "green",
};

const Container = styled.div`
  ${boxProperty(`100%`, remsize(150))};
  ${displayFlex(`space-around`, `center`, `column nowrap`)};
`;

const H4 = styled.h4`
  ${mediaQueries(`mobileS`)(`
    height:30px;
    display:inline-block;
    text-transform: Capitalize;
    letter-spacing: ${remsize(2)};
    font-size: 1rem;
 `)};

  ${mediaQueries(`laptop`)(`
    font-size: 1.3rem;
   `)};
`;

const Ul = styled.ul`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(120))};
      margin-bottom:10px;
    `)};
`;

const Li = styled.div`
  ${mediaQueries(`mobileS`)(`
      line-height: ${remsize(30)};
      text-align:center;
      & > a {
        text-decoration: none;
        ${textProperty(
          theme.$blue,
          `.8rem`,
          100,
          `center`,
          `capitalize`,
          remsize(0)
        )};
      &:hover {
        color:${theme.$red};
      }
      &:active {
        color:${theme.$green}
      }
      }
    }
    `)};

  ${mediaQueries(`mobileM`)(`
      a {
        font-size:.9rem;
      }
  `)};

  ${mediaQueries(`laptop`)(`
    a {
      font-size:1rem;
    }
  `)};
`;

const LPNavigation = () => (
  <Container id="lpNavigation">
    <H4>
      Recent Downloads
      <hr />
    </H4>
    <Ul>
      <Li>
        <Link href="/music">download latest music</Link>
      </Li>
      <Li>
        <Link href="/videos">download latest videos</Link>
      </Li>
      <Li>
        <Link href="/images">download latest images</Link>
      </Li>
    </Ul>
  </Container>
);
export default LPNavigation;
