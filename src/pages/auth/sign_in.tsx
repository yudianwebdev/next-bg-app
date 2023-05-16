import {
  GoogleAuthProvider,
  getAuth,
  getIdToken,
  signInWithPopup,
} from "firebase/auth";
import { googleProvider } from "../../config/firebase";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import APINew from "../../utils/Api";

function SignIn() {
  const router = useRouter();

  function btnLoginGoogle2() {
    const auth = getAuth();

    signInWithPopup(auth, googleProvider).then(async () => {
      const idToken = await getIdToken(auth.currentUser, true);

      APINew.post("/sign_in_google", { Firebasetoken: idToken }).then((res) => {
        console.log(res.token);
        Cookies.set("token", res.token);
        router.push("/page2");
      });
      console.log(idToken);
    });
  }

  async function btnLoginGoogle() {
    const auth = getAuth();
    const { currentUser } = auth;
    signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        const idToken = await getIdToken(currentUser, true);
        console.log("idtoken", idToken);
        const credential = GoogleAuthProvider.credentialFromResult(res);
        console.log("credensial,", credential.accessToken);
        const token = credential.accessToken;
        console.log("====================================");
        console.log(token);
        console.log("====================================");
        Cookies.set("token", token);
        APINew.post("/sign_in_google", { Firebasetoken: idToken }).then(
          async (res) => {
            console.log("====================================");
            console.log(token);
            console.log("====================================");
            console.log("berhasil login with google", res.user);
            router.push("/page2");
          }
        );
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
  return (
    <div>
      <div onClick={() => btnLoginGoogle()}>Login By Google</div>
      <div onClick={() => btnLoginGoogle2()}>Login By Google</div>
    </div>
  );
}

export default SignIn;
