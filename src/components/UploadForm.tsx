import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../fp/mediaQueries";
import remsize from "../fp/remsize";
import boxProperty from "../fp/boxProperty";
import displayFlex from "../fp/displayFlex";

const theme = {
  $light: "#eeeeee",
  $lightblue: "lightblue",
  $black: "black",
  $green: "green",
  $dark: "#333333",
};

const Form = styled.form`
  ${mediaQueries("mobileS")(`
 ${boxProperty(remsize(250), remsize(250), " 50px auto", "", theme.$light)};
  border-radius: ${remsize(30)} ${remsize(0)};
  box-shadow: 5px 5px 5px;
  ${displayFlex("space-between", "center", "column nowrap")};

  input {
    &:first-child {
      border:1px solid #333333;
      padding:3px;
    };
    width:170px
  }
  `)}
`;

const Div = styled.div`
  ${boxProperty(`100%`, `90%`, "auto", `10px`)};
  ${displayFlex(`space-around`, "center", `column nowrap`)}
`;

const H4 = styled.h4`
  ${boxProperty("100%", remsize(30), `auto`, remsize(12), theme.$dark)};
  color: white;
  text-align: center;
  letter-spacing: ${remsize(2)};
  border-radius: 30px 0px 0px;
  margin-left: auto;
`;

interface Prop {
  (music?: any, videos?: any, images?: any): any;
}

const hints = {
  musicHint: "Upload Music",
  videosHint: "Upload Videos",
  imagesHint: "Upload Images",
};

const UploadForm: Prop = (props: any) => {
  const RenderMusic = (
    <Form
      action="/api/uploadmusic"
      method="POST"
      encType="multipart/form-data"
      id="musicForm"
    >
      <H4>{hints.musicHint}</H4>
      <Div>{props.children}</Div>
    </Form>
  );

  const RenderVideos = (
    <Form
      action="/api/uploadvideos"
      method="POST"
      encType="multipart/form-data"
      id="videosForm"
    >
      <H4>{hints.videosHint}</H4>
      <Div>{props.children}</Div>
    </Form>
  );

  const RenderImages = (
    <Form
      action="/api/uploadimages"
      method="POST"
      encType="multipart/form-data"
      id="imagesForm"
    >
      <H4>{hints.imagesHint}</H4>
      <Div>{props.children}</Div>
    </Form>
  );

  if (props.videos) return RenderVideos;
  if (props.images) return RenderImages;
  else return RenderMusic;
};

export default UploadForm;
