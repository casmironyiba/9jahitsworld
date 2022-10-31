import React, { MouseEvent } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import DownloadFile from "../components/DownloadFile";
import displayFlex from "../fp/DisplayFlex";
import { dehydrate, QueryClient, useQuery } from "react-query";
import fetchData from "../components/fetchData";
import { useRouter } from "next/router";
import theme from "../components/Themes";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(250), remsize(1050))};
    padding:${remsize(20)};
    ${displayFlex(`space-between`, "center", `column nowrap`)};
    background:${theme.$dark};
    box-shadow:1px 1px 3px
`)};

  ${mediaQueries(`mobileM`)(`
    width:300px;
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
  ${mediaQueries(`mobileS`)(`
${boxProperty(`100%`, `100%`, "auto", remsize(5), theme.$yellow)}

                       `)}
`;
export default function MusicDownloadArticle(props: any) {
  const router = useRouter();
  const { id } = router.query;
  //const fetchItem = () => fetchData(`/api/music/${id}`);
  //const { data, isLoading, isFetching } = useQuery<any>("music", fetchItem);

  //if (!data) return <div>No data</div>;
  //if (isLoading) return <div>isLoading...</div>;
  //if (isFetching) return <div>isFetching...</div>;
  console.log(props);
  //console.log(data.file);
  return (
    <Container id="downloadsArticle">
      <DownloadFile>
        <a href={`/api/musicTrack/${id}`} download>
          {props.filename}
        </a>
      </DownloadFile>
    </Container>
  );
}
