import React, { useRef, useEffect } from "react";
import useInput from "../fp/UseInput";
import Button from "../components/Button";
import Form from "../components/Form";
import postRequest from "../fp/PostRequest";
import GoBackButton from "../components/GoBackButton";
import styled from "styled-components";
import { mediaQueries } from "../fp/MediaQueries";
import BoxProperty from "../fp/BoxProperty";
import Header from "../templates/Header";
import Layout from "../components/Layout";
import Main from "../templates/Main";
import Footer from "../templates/Footer";

const Container = styled(Layout)`
  ${mediaQueries(`mobileS`)(`
    ${BoxProperty(`100%`, `100vh`)};
    `)};
`;

const UploadGospel = () => {
  const [gospel, resetGospel, bindGospel] = useInput("");

  const gospelRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const gospelKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log(`submited`);
  };

  const handleSubmit = () => {
    postRequest(`/api/gospel/gospellists`, gospel);
    console.log(`gospel music added`);
    setTimeout(() => {
      resetGospel();
    }, 5000);
  };

  useEffect(() => {
    gospelRef.current.focus();
  }, []);
  return (
    <Container id="uploadGospel">
      <Header />
      <Main>
        <Form
          action="/api/gospel/gospellists"
          method="POST"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          id="uploadGospelForm"
        >
          <h4>Upload Gospel</h4>
          <div>
            <input
              type="file"
              name="gospel"
              {...bindGospel}
              ref={gospelRef}
              onKeyDown={gospelKeyDown}
              id="musicInput"
              placeholder="Gospel"
              required
            />

            <Button type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
              Upload Gospel
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

export default UploadGospel;
