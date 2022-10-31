import React from "react";
import styled from "styled-components";
import boxProperty from "../../fp/BoxProperty";
import { getFiles, getFile } from "../../components/filesApi";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import Footer from "../../templates/Footer";
import Header from "../../templates/Header";
import Main from "../../templates/Main";
import PageArticle from "../../templates/PageArticle";
import RecentUpdate from "../../components/RecentUpdate";

const Container = styled.div`
  //${boxProperty("100%", `100%`, "auto")};
`;
const Div = styled.div``;

export default function MusicDownload(props: any) {
  const router = useRouter();
  const { id } = router.query;
  const fetchImage = () => getFiles(`api/images/${id}`);
  const { data, isLoading, isFetching } = useQuery<any>(
    "imageTrack",
    fetchImage
  );
  console.log(data);
  if (!data) return <div>No data</div>;
  if (isLoading) return <div>isLoading...</div>;
  if (isFetching) return <div>please wait for the data to be fetched...</div>;
  return (
    <Container id="musicDownload">
      <Header />
      <Main>
        <PageArticle>
          <Div>
            <div>
              <div>
                <a
                  href={`http://localhost:3000/api/imagesTrack/${id}`}
                  download
                >
                  {data?.filename}
                </a>
              </div>
            </div>
          </Div>
          <RecentUpdate />
        </PageArticle>
      </Main>
      <Footer />
    </Container>
  );
}
export async function getServerSideProps(ctx: any) {
  const id = ctx?.query.id;
  const fetchImage = () => getFiles(`api/images/${id}`);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("imageTrack", fetchImage);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
