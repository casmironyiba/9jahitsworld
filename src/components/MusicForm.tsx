import React, { FC } from "react";
import styled from "styled-components";
import Form from "./Form";

const Container = styled(Form)``;

const MusicForm: FC = (props: any) => (
  <Container
    action={"/api/uploadMusic"}
    method="POST"
    encType="multipart/form-data"
    id="musicForm"
  >
    <h4>Upload Music</h4>
    <div>{props.children}</div>
  </Container>
);

export default MusicForm;
