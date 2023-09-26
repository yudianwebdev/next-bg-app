import { useRouter } from "next/router";
import FormInpurLabel from "../../component/input/FormInputLabel";
import useInput from "../../utils/useInput";
import ButtonUniversal from "../../component/button/Button";
import APINew from "../../utils/Api";
import { useState } from "react";
import Cookies from "js-cookie";

function PageSignUp() {
  const router = useRouter();
  const [input, handleInput] = useInput({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function btnSignUp() {
    APINew.post("/auth/signup", {
      name: input.name,
      email: input.email,
      password: input.password,
    })
      .then((res) => {
        Cookies.set("token", res.access_token);
        router.push("/page2");
        console.log("====================================");
        console.log(res);
        console.log("====================================");
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        setErrors(err?.errors);
        console.log("====================================");
      });
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col bg-[#121212] shadow-2xl rounded-lg w-1/3 bg-opacity-20 p-10 gap-2">
        <FormInpurLabel
          label="Name"
          value={input.name}
          onChange={handleInput("name")}
          required={true}
          error={errors?.name}
        />
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
          error={errors?.password}
          required
        />

        <ButtonUniversal
          onClick={() => btnSignUp()}
          label="Sign Up"
          type="block"
        />

        <a href="./sign_in">Sign In Now</a>
      </div>
    </div>
  );
}

export default PageSignUp;
