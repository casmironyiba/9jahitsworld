import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import PageArticle from "./PageArticle";
import MusicCard from "../components/MusicCard";
import { dehydrate, QueryClient, useQuery } from "react-query";
import fetchData from "../components/fetchData";
import Link from "next/link";

const Container = styled.div``;
const Div = styled(MusicCard)``;

const fetchImages = () => fetchData(`/api/images`);

const ImagesTemplate: FC = () => {
  const { data, isLoading, isFetching } = useQuery<any[]>(
    "images",
    fetchImages
  );
  return (
    <Container id="imagesTemplate">
      <Header />
      <Main>
        <PageArticle>
          {data?.map((buffer: any, index: any) => (
            <Div key={index}>
              <div id="itemCard">
                <div id="artistImage"></div>
                <div id="music">
                  <h6>
                    <Link href={`/images/${buffer._id}`}>
                      {buffer.filename}
                    </Link>
                  </h6>
                </div>
              </div>
            </Div>
          ))}
          )
        </PageArticle>
      </Main>
      <Footer />
    </Container>
  );
};
export default ImagesTemplate;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("images", fetchImages);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
