import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import displayFlex from "../fp/DisplayFlex";
import theme from "./Themes";

const Container = styled.div`
  ${mediaQueries("mobileS")(`
    ${boxProperty(remsize(250), remsize(600))};
    padding:${remsize(20)};
    background: ${theme.$purple};
    box-shadow:1px 1px 3px
    `)};

  ${mediaQueries("mobileM")(`
                              width:${remsize(350)};


                              `)};

  ${mediaQueries(`mobileL`)(`
                            width:80vw;


                            `)};

  ${mediaQueries(`tablet`)(`
                           width:60vw;



                                                     `)};
  ${mediaQueries(`laptop`)(`
    width:45vw;
  `)};
`;

const Div = styled.div`
  ${mediaQueries("mobileS")(`
    ${boxProperty(`100%`, `100%`, "auto", remsize(""), theme.$yellow)}

                          `)};
`;
const RecentUpdate = () => {
  return (
    <Container id="recentUpdate">
      <Div>Recent updates</Div>
    </Container>
  );
};
export default RecentUpdate;
