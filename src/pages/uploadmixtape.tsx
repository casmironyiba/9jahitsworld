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

  //${mediaQueries(`laptop`)(`
      //${BoxProperty(`100%`, `100`)};
      //`)};
`;

const UploadMixtape = () => {
  const [mixtape, resetMixtape, bindMixtape] = useInput("");

  const mixtapeRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const mixtapeKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log(`submited`);
  };

  const handleSubmit = () => {
    postRequest(`/api/mixtape/mixtapelists`, { music: mixtape });
    console.log(`mixtape added`);
    setTimeout(() => {
      resetMixtape();
    }, 5000);
  };

  useEffect(() => {
    mixtapeRef.current.focus();
  }, []);
  return (
    <Container id="uploadMixtape">
      <Header />
      <Main>
        <Form
          action="/api/mixtape/mixtapelists"
          method="POST"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          id="uploadMixtapeForm"
        >
          <h4>Upload Mixtape</h4>
          <div>
            <input
              type="file"
              name="mixtape"
              {...bindMixtape}
              ref={mixtapeRef}
              onKeyDown={mixtapeKeyDown}
              id="mixtapeInput"
              placeholder="Mixtape"
              required
            />

            <Button type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
              Upload Mixtape
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

export default UploadMixtape;
