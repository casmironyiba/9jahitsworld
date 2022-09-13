import styled from "styled-components";
import displayGrid from "../fp/DisplayGrid";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";

const Layout = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${displayGrid(
      `${remsize(156)} auto  ${remsize(150)} / repeat(12,1fr)`,
      `"h h h h h h h h h h h h"
      "m m m m m m m m m m m m"
      "f f f f f f f f f f f f"`,
      remsize(0)
    )}

    `)};

  ${mediaQueries(`laptop`)(`
    ${displayGrid(
      `${remsize(156)} auto  ${remsize(150)} / repeat(12,1fr)`,
      `"h h h h h h h h h h h h"
      "m m m m m m m m m m m m"
      "f f f f f f f f f f f f"`,
      remsize(0)
    )}
                             `)}
`;

export default Layout;
