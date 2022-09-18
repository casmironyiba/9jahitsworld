import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import PageArticle from "./PageArticle";
import MusicCard from "../components/MusicCard";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Link from "next/link";
import fetchData from "../components/fetchData";

const Container = styled.div``;
const Div = styled(MusicCard)``;

const fetchVideos = () => fetchData("/api/videos/videosList");

const VideosTemplate = () => {
  const { data, isLoading, isFetching } = useQuery<any>("videos", fetchVideos);

  if (!data) return <div>No data</div>;
  if (isLoading) return <div>isLoading...</div>;
  if (isFetching) return <div>isFetching...</div>;

  return (
    <Container id="videosTemplate">
      <Header />
      <Main>
        <PageArticle>
          {data?.map((buffer: any, index: any) => (
            <Div key={index}>
              <div id="itemCard">
                <div id="artistImage">
                  <img src="casmir.png" />
                </div>
                <div id="music">
                  <h6>
                    <Link href={`/videos/${buffer._id}`}>
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
export default VideosTemplate;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("music", fetchVideos);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
