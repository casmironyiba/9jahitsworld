import React, { MouseEvent } from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import remsize from "../fp/Remsize";
import { mediaQueries } from "../fp/MediaQueries";
import DownloadFile from "../components/DownloadFile";
import displayFlex from "../fp/DisplayFlex";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getFile } from "../components/filesApi";
import { useRouter } from "next/router";
import theme from "../components/Themes";
import router from "react-router-dom";

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
const VideosDownloadArticle = (props: any) => {
  //const data = props.data;
  const router = useRouter();
  const { id } = router.query;
  const fetchItem = () => getFile(`api/videos/`, id);

  const { data, isLoading, isFetching } = useQuery<any>("videos", fetchItem);
  console.log(data);
  return (
    <Container id="downloadsArticle">
      <DownloadFile>
        <a href={`/api/videoTrack/${id}`}> {data.filename}</a>
      </DownloadFile>
    </Container>
  );
};

export default VideosDownloadArticle;
