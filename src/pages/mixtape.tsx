import React, { FC, useEffect } from "react";
import styled from "styled-components";
import PageArticle from "../templates/PageArticle";
import { dehydrate, QueryClient, useQuery } from "react-query";
import MusicCard from "../components/MusicCard";
import Link from "next/link";
import { getFiles } from "../components/filesApi";
import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Image from "next/image";

const Container = styled.div``;
const Div = styled(MusicCard)``;

const fetchMusic = () => getFiles("api/mixtape/mixtapelists");
export default function MixTape(props: any) {
  const { data, isLoading, isFetching } = useQuery<any>("mixtape", fetchMusic);
  if (!data) return <div>No data</div>;
  if (isLoading) return <div>isLoading...</div>;
  if (isFetching) return <div>isFetching...</div>;
  return (
    <Container>
      <Header />
      <PageArticle>
        {data.map((mixtape: any, index: any) => (
          <Div key={index}>
            <div id="itemCard">
              <div id="artistImage">
                <img src="casmir.png" alt="" />
              </div>
              <div id="music">
                <h6>
                  <Link href={`mixtape/${mixtape._id}`}>
                    {mixtape?.filename}
                  </Link>
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
  await queryClient.prefetchQuery("mixtape", fetchMusic);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
