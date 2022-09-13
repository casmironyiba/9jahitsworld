import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import remsize from "../fp/Remsize";
import { dehydrate, QueryClient, useQuery } from "react-query";
import fetchData from "./fetchData";

const theme = {
  $white: "white",
  $black: "black",
};

const Div = styled.div`
  ${boxProperty(remsize(640), remsize(150), 0, 0, theme.$white)}
  ${displayFlex(`space-between`, `center`, `row nowrap`)};
  box-shadow: ${remsize(2)} ${remsize(2)} ${remsize(2)};
  border: 1px solid ${theme.$white};
`;

const ArtistImage = styled.div`
  ${boxProperty(`40%`, `100%`)};

  img {
    ${boxProperty(`100%`, `100%`)};
  }
`;

const fetchVideos = () => fetchData("/api/videos");

export const VideosCard: FC = () => {
  const { data, isLoading, isFetching } = useQuery<any>("videos", fetchVideos);

  if (!data) return <div>No data</div>;
  if (isLoading) return <div>isLoading...</div>;
  if (isFetching) return <div>isFetching...</div>;

  return data?.map((buffer: any, index: any) => (
    <Link href="/" key={index}>
      <Div id="itemCard">
        <ArtistImage>
          <img src="/casmir.png" alt="artist" />
        </ArtistImage>
        <div id="videos">
          <h6>
            <Link href={`/images/${buffer._id}`}>{buffer.filename}</Link>
          </h6>
        </div>
      </Div>
    </Link>
  ));
};

export default VideosCard;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("videos", fetchVideos);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
