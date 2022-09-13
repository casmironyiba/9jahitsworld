import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import PageArticle from "../templates/PageArticle";
import { dehydrate, QueryClient, useQuery } from "react-query";
import MusicCard from "../components/MusicCard";
import Link from "next/link";
import fetchData from "../components/fetchData";

const Container = styled.div``;
const Div = styled(MusicCard)``;

const fetchMusic = () => fetchData(`/api/music/musicList`);

const MusicTemplate: FC = () => {
  //const [music, setMusic] = useState<any>("");
  const { data, isLoading, isFetching } = useQuery<any>("music", fetchMusic);

  if (!data) return <div>No data</div>
  if (isLoading) return <div>isLoading...</div>
  if (isFetching) return <div>isFetching...</div>

  console.log(data);
  return (
    <Container id="musicTemplate">
      <Header />
      <Main>
        <PageArticle>
          {data.map((buffer: any, index: any) => (
            <Div key={index}>
              <div id="itemCard">
                <div id="artistImage">
                  <img src="casmir.png" />
                </div>
                <div id="music">
                  <h6>
                    <Link href={`downloads/${buffer._id}`} >
                      {buffer.filename}
                    </Link>
                  </h6>
                </div>
              </div>
            </Div>
          ))}
        </PageArticle>
      </Main>
      <Footer />
    </Container>
  );
};

export default MusicTemplate;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("music", fetchMusic);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
