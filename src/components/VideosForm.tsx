import React, { FC } from "react";
import styled from "styled-components";
import Form from "./form";

const VideosForm = styled(Form)``;

const UploadVideosForm: FC = (props: any) => (
  <VideosForm
    action={"/api/uploadVideos"}
    method="POST"
    encType="multipart/form-data"
    id="videosForm"
  >
    <h4>Upload Videos</h4>
    <div>{props.children}</div>
  </VideosForm>
);

export default UploadVideosForm;
