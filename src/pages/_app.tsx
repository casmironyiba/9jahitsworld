import React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps | any) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <Container>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />;
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Container>
  );
}

export default MyApp;
