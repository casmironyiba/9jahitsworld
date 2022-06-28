import React, { FC, useEffect, useState, MouseEvent } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import { mediaQueries } from "../fp/mediaQueries";
import DownloadFile from "../components/downloadFile";
import displayFlex from "../fp/displayFlex";
import { useParams } from "react-router";
import axios from "axios";
//import FileSaver from "file-saver";

const theme = {
  $light: "#eeeeee",
};
const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(300), remsize(800))};
    ${displayFlex(`space-between`, "center", `column nowrap`)};
    background:${theme.$light};
  `)};

  ${mediaQueries(`mobileM`)(`
    width:400px;
    `)};

  ${mediaQueries(`mobileL`)(``)};
  ${mediaQueries(`tablet`)(``)};
  ${mediaQueries(`laptop`)(`
    width:${remsize(650)}
  `)};
`;

const DownloadsArticle: FC = () => {
  const [activeFile, setActiveFile] = useState<any>({});
  const { id } = useParams<any>();
  const onSubmitDownload = (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    let downloadFilename = activeFile.filename;

    axios({
      method: "GET",
      url: `/api/uploadVideos/${id}`,
      responseType: "blob",
      params: {
        file: downloadFilename,
      },
    })
      .then(() => {
        setActiveFile({ fileDownloading: true });
      })
      .then((response: any) => {
        //FileSaver.saveAs(response.data, downloadFilename);
        console.log(response);
      })
      .then(() => {
        setActiveFile({ fileDownloading: false });
        console.log("File Downloading Completed");
      });
  };
  useEffect(() => {
    onSubmitDownload();
    //fetchRequest(`/api/uploadVideos/${id}`).then((response: any) =>
    //setActiveFile(response.data)
    //);
  });
  console.log(activeFile);
  return (
    <Container id="downloadsArticle">
      <DownloadFile>
        <a href="pooo" download>
          {activeFile.filename}
        </a>
      </DownloadFile>
    </Container>
  );
};

export default DownloadsArticle;
