import styled from "styled-components";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";

const theme = {
  $light: "#eeeeee",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`95%`, remsize(150))};
    margin-bottom:10px;
    text-align:center;
    background:${theme.$light};
  `)}

  ${mediaQueries(`laptop`)(`
    width:80%;
    `)};
`;

const PageAds: FC = () => <Container id="pageAds">Page Ads</Container>;

export default PageAds;
