import React from "react";
import styled from "styled-components";
import PageArticle from "../templates/PageArticle";
import { dehydrate, QueryClient, useQuery } from "react-query";
import MusicCard from "../components/MusicCard";
import Link from "next/link";
import { getFiles } from "../components/filesApi";

const Div = styled(MusicCard)``;

const fetchImages = () => getFiles("api/images/imagesList");
export default function Images(props: any) {
  const { data, isLoading, isFetching } = useQuery<any>("images", fetchImages);

  if (!data) return <div>No data</div>;
  if (isLoading) return <div>isLoading...</div>;
  if (isFetching) return <div>isFetching...</div>;
  return (
    <PageArticle>
      {data.map((images: any, index: any) => (
        <Div key={index}>
          <div id="itemCard">
            <div id="artistImage">
              <img src="casmir.png" />
            </div>
            <div id="images">
              <h6>
                <Link href={`images/${images._id}`}>{images?.filename}</Link>
              </h6>
            </div>
          </div>
        </Div>
      ))}
    </PageArticle>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("images", fetchImages);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
