import { useContext } from "react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYahoo,
} from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";
const SocialLogin = () => {
  const { googleSignIn, githubSignIn, yahooSignIn } = useContext(AuthContext);
  const handleMedia = (media) => {
    media()
      .then(() => {
        swal("successful!", "You have signed in", "success");
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex justify-center items-center gap-5 font-bold underline text-3xl ">
      <button onClick={() => handleMedia(googleSignIn)}>
        <AiFillGoogleCircle></AiFillGoogleCircle>
      </button>
      <button>
        <AiFillFacebook></AiFillFacebook>
      </button>
      <button>
        <AiFillTwitterCircle></AiFillTwitterCircle>
      </button>
      <button>
        <AiFillGithub onClick={() => handleMedia(githubSignIn)}></AiFillGithub>
      </button>
      <button>
        <AiFillYahoo onClick={() => handleMedia(yahooSignIn)}></AiFillYahoo>
      </button>
    </div>
  );
};

export default SocialLogin;
