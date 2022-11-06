import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import Header from "../templates/Header";
import Main from "../templates/Main";
import Footer from "../templates/Footer";
import Layout from "../components/Layout";
import { mediaQueries } from "../fp/MediaQueries";
import React, { useRef, useEffect } from "react";
import useInput from "../fp/UseInput";
import Button from "../components/Button";
import postRequest from "../fp/PostRequest";
import Form from "../components/Form";
import GoBackButton from "../components/GoBackButton";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `100vh`)};
  `)};
`;

const UploadVideos = () => {
  const [videos, resetVideos, bindVideos] = useInput("");

  const videosRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const videosKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log(`form submitted`);
  };

  const handleSubmit = () => {
    postRequest("/api/videos/videolists", { videos });
    console.log(`videos card added`);
    setTimeout(() => {
      resetVideos();
    }, 5000);
  };

  useEffect(() => {
    videosRef.current.focus();
  }, []);
  return (
    <Container>
      <Header />
      <Main>
        <Form
          method="POST"
          action="/api/videos/videolists"
          onSubmit={handleSubmit}
          id="uploadVideosForm"
          encType="multipart/form-data"
        >
          <h4>Upload Videos</h4>
          <div>
            <input
              type="file"
              name="videos"
              {...bindVideos}
              ref={videosRef}
              onKeyDown={videosKeyDown}
              id="videosInput"
              placeholder="videos"
              required
            />

            <Button type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
              Upload Videos
            </Button>
            <div id="goBackButton__container">
              <GoBackButton />
            </div>
          </div>
        </Form>
      </Main>
      <Footer />
    </Container>
  );
};

export default UploadVideos;
