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
      ${boxProperty("250px", remsize(130), "auto", remsize(5), theme.$light)};
      ${displayFlex(`space-between`, `center`, `row nowrap`)};
      box-shadow: ${remsize(2)} ${remsize(2)} ${remsize(2)};
      border: 1px solid ${theme.$white};
      //font-size:6px;
    }

    div#artistImage {
      ${boxProperty(`25%`, `100%`)};

      img {
        ${boxProperty(`80px`, `100px`)};
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
        width:100%;
        padding:10px;
      }
      div#artistImage {
       
      }

      `)};
  ${mediaQueries(`laptop`)(`
    &>div#itemCard {
      width: 90%;
        //background:red;
    }
  `)};

  ${mediaQueries(`laptopL`)(`
    &>div#itemCard {
      width: ${remsize(400)};
    }
  `)};
`;

export default MusicCard;
