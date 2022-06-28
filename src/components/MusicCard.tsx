import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $white: "white",
  $black: "black",
  $light: "#eeeeee",
};
const MusicCard = styled.div`
  ${mediaQueries(`mobileS`)(`
    a {
      text-decoration: none;
      font-size: .8rem;
      letter-spacing: 2px;
    }
    div#itemCard {
      ${boxProperty(
        remsize(285),
        remsize(130),
        "auto",
        remsize(5),
        theme.$light
      )};
      ${displayFlex(`space-between`, `center`, `row nowrap`)};
      box-shadow: ${remsize(2)} ${remsize(2)} ${remsize(2)};
      border: 1px solid ${theme.$white};
    }

    div#artistImage {
      ${boxProperty(`35%`, `100%`)};

      img {
        ${boxProperty(`100px`, `100px`)};
      }
    }

    div#music {
      ${boxProperty(`65%`, `100%`)};
      ${displayFlex(`space-between`, `center`)}

      & > h6 {
        ${boxProperty(`100%`, `100%`)}
        color: ${theme.$black};
      }
    }
  `)};

  ${mediaQueries(`mobileM`)(`
    div#itemCard {
      width:${remsize(320)};
    }
    `)};

  ${mediaQueries(`mobileL`)(`
      div#itemCard {
        width:${remsize(385)};
      }

      `)};

  ${mediaQueries(`tablet`)(`
      div#itemCard {
        width:${remsize(450)};
      }

      `)};
  ${mediaQueries(`laptop`)(`
    &>div#itemCard {
      width: ${remsize(500)};
    }
  `)};

  ${mediaQueries(`laptopL`)(`
    &>div#itemCard {
      width: ${remsize(600)};
    }
  `)};
`;

export default MusicCard;
