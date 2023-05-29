import {
  GoogleAuthProvider,
  getAuth,
  getIdToken,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { googleProvider } from "../../config/firebase";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import APINew from "../../utils/Api";
import FormInpurLabel from "../../component/input/FormInputLabel";
import ButtonUniversal from "../../component/button/Button";
import useInput from "../../utils/useInput";
import { useState } from "react";

function PageSignIn() {
  const router = useRouter();
  const [input, handleInput] = useInput({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  function btnLoginGoogle2() {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider).then(async () => {
      const idToken = await getIdToken(auth.currentUser);
      console.log("token firebase ", idToken);
      APINew.post("/auth/google", { id_token: idToken })
        .then((res) => {
          Cookies.set("token", res.access_token);
          router.push("/page2");
        })
        .catch((err) => {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
        });
    });
  }

  async function btnLoginGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
        const token = credential.accessToken;
        console.log("====================================");
        console.log(token);
        console.log("====================================");
        // Cookies.set("token", token);
        // router.push("/page2");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.info(errorCode, errorMessage, "error");
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  function btnSignIn() {
    console.log("====================================");
    console.log(input);
    console.log("====================================");
    APINew.post("/auth/email", { email: input.email, password: input.password })
      .then((res) => {
        Cookies.set("token", res?.access_token);
        router.push("/page2");
        console.log("====================================");
        console.log(res);
        console.log("====================================");
      })
      .catch((err) => {
        console.log("lah");
        console.log(err?.errors);
        console.log("====================================");
        setErrors(err.errors);
      });
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col bg-[#121212] shadow-2xl rounded-lg w-1/3 bg-opacity-20 p-10 gap-2">
        <FormInpurLabel
          label="Email"
          type="email"
          value={input.email}
          onChange={handleInput("email")}
          required={true}
          error={errors?.email}
        />
        <FormInpurLabel
          label="Password"
          type="password"
          onChange={handleInput("password")}
          value={input.password}
          required
          error={errors?.password}
        />
        <ButtonUniversal
          onClick={() => btnSignIn()}
          label="Sign In"
          type="block"
        />
        {/* <ButtonUniversal
          onClick={() => btnLoginGoogle2()}
          label="Sign In With Google"
          type="outline"
        />
        <ButtonUniversal
          onClick={() => LOGOUT()}
          label="lOGOUT"
          type="outline"
        /> */}
        <a href="./sign_up">Sign Up Now</a>
      </div>
    </div>
  );
}

export default PageSignIn;
