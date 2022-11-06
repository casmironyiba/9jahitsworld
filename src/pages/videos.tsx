import React, { FC } from "react";
import styled from "styled-components";
import PageArticle from "../templates/PageArticle";
import { dehydrate, QueryClient, useQuery } from "react-query";
import MusicCard from "../components/MusicCard";
import Link from "next/link";
import { getFiles } from "../components/filesApi";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

const Container = styled.div``;

const Div = styled(MusicCard)``;

const url = `api/videos/videolists`;

const fetchVideos = () => getFiles(url);
export default function Videos(props: any) {
  const { data, isLoading, isFetching } = useQuery<any>("videos", fetchVideos);
  console.log(data);
  console.log(props);

  if (!data) return <div>No data</div>;
  if (isLoading) return <div>isLoading...</div>;
  if (isFetching) return <div>isFetching...</div>;
  return (
    <Container>
      <Header />
      <PageArticle>
        {data.map((buffer: any, index: any) => (
          <Div key={index}>
            <div id="itemCard">
              <div id="artistImage">
                <img src="casmir.png" />
              </div>
              <div id="music">
                <h6>
                  <Link href={`videos/${buffer._id}`}>{buffer?.filename}</Link>
                </h6>
              </div>
            </div>
          </Div>
        ))}
      </PageArticle>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("videos", fetchVideos);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
