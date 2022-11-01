import styled from "styled-components";
import { dehydrate, QueryClient, useQuery } from "react-query";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import theme from "./Themes";
import { getFiles } from "./filesApi";
import displayFlex from "../fp/DisplayFlex";
import Link from "next/link";

const Container = styled.div`
  ${mediaQueries("mobileS")(`
    ${boxProperty(remsize(250), remsize(600))};
    padding:${remsize(10)};
    background: ${theme.$purple};
    //box-shadow:1px 1px 3px;
    `)};

  ${mediaQueries("mobileM")(`
    width:${remsize(350)};
   `)};

  ${mediaQueries(`mobileL`)(`
    width:80vw;
  `)};

  ${mediaQueries(`tablet`)(`
    width:40%;
    height:${remsize(1000)};
   `)};

  ${mediaQueries(`laptop`)(`
    width:45vw;
  `)};
`;

const Div = styled.div`
  ${mediaQueries("mobileS")(`
    ${boxProperty(`100%`, `100%`, "auto", remsize(15))};
  `)};
`;

const H4 = styled.h4`
  text-align: left;
  letter-spacing: 2px;
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid;
`;

const Ul = styled.ul`
  width: 100%;
  height: 90%;
  ${displayFlex("space-around", "flex-start", "column wrap")}
`;

const Li = styled.li`
  list-style: none;
  height: ${remsize(35)};
  border-bottom: 1px solid ${theme.$palevioletred};
  a {
    text-decoration: none;
  }
`;

const fetchMusic = () => getFiles(`api/music/recentMusic`);

const RecentUpdate = () => {
  const { data, isLoading, isFetching } = useQuery<any>(
    "recentMusic",
    fetchMusic
  );
  return (
    <Container id="recentUpdate">
      <Div id="recentUpdate__dataContainer">
        <H4>Recent updates</H4>
        <Ul>
          {data?.map((data: any, index: any) => (
            <Li key={index}>
              <Link href="">{data.filename}</Link>
            </Li>
          ))}
        </Ul>
      </Div>
    </Container>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("recentMusic", fetchMusic);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default RecentUpdate;
