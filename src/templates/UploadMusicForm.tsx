import React, { useRef, useEffect } from "react";
import useInput from "../fp/UseInput";
import Button from "../components/Button";
import Form from "../components/Form";
import postRequest from "../fp/PostRequest";
import GoBackButton from "../components/GoBackButton";

const UploadMusicForm = () => {
  const [music, resetMusic, bindMusic] = useInput("");

  const musicRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const musicKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") console.log(`submited`);
  };

  const handleSubmit = () => {
    postRequest(`/api/music/musicList`, { music });
    console.log(`music card added`);
    setTimeout(() => {
      resetMusic();
    }, 5000);
  };

  useEffect(() => {
    musicRef.current.focus();
  }, []);
  return (
    <Form
    action="/api/music/musicList"
      method="POST"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      id="uploadMusicForm"
    >
      <h4>Upload Music</h4>
      <div>
        <input
          type="file"
          name="music"
          {...bindMusic}
          ref={musicRef}
          onKeyDown={musicKeyDown}
          id="musicInput"
          placeholder="Music"
          required
        />

        <Button type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
          Upload Music
        </Button>
        <div id="goBackButton__container">
          <GoBackButton />
        </div>
      </div>
    </Form>
  );
};

export default UploadMusicForm;
