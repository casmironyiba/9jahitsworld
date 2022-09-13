import { useRouter } from "next/router";
import { Gobackbutton } from "./Button";

const GoBackButton = () => {
  const history = useRouter();
  const handler = () => history.back();

  return (
    <Gobackbutton onClick={handler} id="goBackButton">
      Go Back
    </Gobackbutton>
  );
};

export default GoBackButton;
