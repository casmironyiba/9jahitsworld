import React, { MouseEvent } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import DownloadFile from "../components/DownloadFile";
import displayFlex from "../fp/DisplayFlex";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import fetchData from "../components/fetchData";

const theme = {
  $light: "#eeeeee",
};
const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(300), remsize(800))};
    ${displayFlex(`space-between`, "center", `column nowrap`)};
    background:${theme.$light};
  `)};

  ${mediaQueries(`mobileM`)(`
    width:400px;
    `)};

  ${mediaQueries(`mobileL`)(``)};
  ${mediaQueries(`tablet`)(``)};
  ${mediaQueries(`laptop`)(`
    width:${remsize(650)}
  `)};
`;

const DownloadsArticle = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetchItem = () => fetchData(`/api/music/${id}`);
  const { data, isLoding, isFetching } = useQuery<any>("item", fetchItem);

  console.log(data);

  const handleDownload = (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    //fetchItem('/api/')
  };
  return (
    <Container id="downloadsArticle">
      <DownloadFile>
        <a href="pooo" download onClick={handleDownload}>
          {data.filename}
        </a>
      </DownloadFile>
    </Container>
  );
};

export default DownloadsArticle;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("music", fetchItem);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}