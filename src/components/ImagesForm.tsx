import React, { FC } from "react";
import styled from "styled-components";
import Form from "./Form";

const Container = styled(Form)``;

const ImagesForm: FC = (props: any) => (
  <Container
    action={"/api/uploadImages"}
    method="POST"
    encType="multipart/form-data"
    id="imagesForm"
  >
    <h4>Upload Images</h4>
    <div>{props.children}</div>
  </Container>
);

export default ImagesForm;
