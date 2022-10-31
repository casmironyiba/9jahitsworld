import { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import useRouter from "next/router";
import remsize from "../fp/Remsize";
import boxProperty from "../fp/BoxProperty";
import displayFlex from "../fp/DisplayFlex";
import { LogoutButton } from "../components/Button";

const theme = {
  $dark: "#333333",
  $light: "#eeeeee",
  $palevioletred: "palevioletred",
  $white: "white",
  $red: "red",
  $black: "black",
  $green: "green",
};

const Container = styled.div``;
const Div = styled.div`
  ${boxProperty(remsize(400), remsize(400), `50px auto`, "", theme.$light)};
  box-shadow: ${remsize(5)} ${remsize(5)} ${remsize(5)};
  border-radius: ${remsize(40)} 0px;

  div#adminRights {
    ${boxProperty(remsize(400), remsize(370), `auto`, "", theme.$light)};
    ${displayFlex(`space-around`, `center`, `column nowrap`)};
    border-radius: 0px 0px ${remsize(30)} 0px;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: ${theme.$black};
    letter-spacing: ${remsize(2)};

    &:hover {
      color: ${theme.$red};
    }
    &:active {
      color: ${theme.$green};
    }
  }
`;

const H4 = styled.h4`
  ${boxProperty("100%", remsize(30), `auto`, remsize(12), theme.$dark)};
  color: ${theme.$white};
  text-align: center;
  letter-spacing: ${remsize(2)};
  border-radius: ${remsize(30)} 0px 0px;
  margin-left: auto;
`;
const AdminArticle = () => {
  console.log(localStorage.getItem("authToken"));
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  privateData;
  const history = useRouter;
  useEffect(() => {
    if (
      !localStorage.getItem("authToken") ||
      localStorage.getItem("authToken") === undefined
    ) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data: response } = await Axios.get("/api/admin", config);
        setPrivateData(response.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError(`You are not authorized please login`);
        history.push("/login");
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return error ? (
    <span>{error}</span>
  ) : (
    <Container id="adminArticle">
      <Div>
        <H4>Admin Rights</H4>
        <div id="adminRights">
          <Link href="/uploadMusic">Upload Music</Link>
          <Link href="/uploadVideos">Upload Videos</Link>
          <Link href="/uploadImages">Upload Images</Link>
          <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
        </div>
      </Div>
    </Container>
  );
};
export default AdminArticle;
