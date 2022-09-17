import React, { useRef, useEffect } from "react";
import useInput from "../fp/UseInput";
import Button from "../components/Button";
import postRequest from "../fp/PostRequest";
import Form from "../components/Form";
import GoBackButton from "../components/GoBackButton";

const UploadImagesForm = () => {
  const [images, resetImages, bindImages] = useInput("");

  const imagesRef = useRef<any>(null);
  const submitRef = useRef<any>(null);

  const imagesKeyDown = (event: any) => {
    if (event.key === "Enter") return submitRef.current.focus();
  };

  const submitKeyDown = (event: any) => {
    if (event.key === "Enter") alert(`form submitted`);
  };

  console.log(images);

  const handleSubmit = () => {
    postRequest("/api/images/imagesList", { images });
    console.log(`image uploaded`);
    setTimeout(() => {
      resetImages();
    }, 5000);
  };

  useEffect(() => {
    imagesRef.current.focus();
  }, []);
  return (
    <Form
      action="/api/images/imagesList"
      method="POST"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      id="uploadImagesForm"
    >
      <h4>Upload Image</h4>
      <div>
        <input
          type="file"
          name="images"
          {...bindImages}
          ref={imagesRef}
          onKeyDown={imagesKeyDown}
          id="imageInput"
          required
        />
        <Button type="submit" ref={submitRef} onKeyDown={submitKeyDown}>
          Upload Image
        </Button>
        <div id="goBackButton__container">
          <GoBackButton />
        </div>
      </div>
    </Form>
  );
};

export default UploadImagesForm;
