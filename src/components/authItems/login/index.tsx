import { SyntheticEvent, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import apiReq from "@/api/api";
import axios from "@/axios";
import { loginResponseData } from "@/api/types";

import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";
import { useAppDispatch } from "@/store";
import { logIn } from "@/store/slices/authSlice/authSlice";

const LoginItem: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  // ----------------------------TODO: CATCH ERROR FROM BACKEND----------------------------
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const clearStates = () => {
    setEmailValue("");
    setPasswordValue("");
  };

  const onFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const obj = { email: emailValue, password: passwordValue };

    setIsLoading(true);
    apiReq.auth
      .login(obj)
      .then((res) => {
        dispatch(logIn(res.data));
        navigate("/");
        clearStates();
      })
      .catch((err) => {
        setError(Object.values(err));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <Button
        classNameList="flex items-center flex-wrap my-4 w-full border border-gray-300 hover:border-gray-500 px-3 py-2 rounded-md text-18px leading-150% text-[#333A49]"
        withImg={true}
        imgLink="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        btnText="Log in with Google"
      />
      <Button
        classNameList="flex items-center flex-wrap my-4 w-full border border-gray-300 hover:border-gray-500 px-3 py-2 rounded-md text-18px leading-150% text-[#333A49]"
        withImg={true}
        imgLink="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        btnText="Log in with Microsoft"
      />
      <div className="flex justify-center items-center my-4 py-4">
        {/* @ts-ignore */}
        <hr width="25%" className="text-loginText bg-loginText mr-2" />
        <span className="text-loginText">or</span>
        {/* @ts-ignore */}
        <hr width="25%" className="text-loginText bg-loginText ml-2" />
      </div>
      <form onSubmit={onFormSubmit}>
        <Input
          withLabel={true}
          classNameList="relative mb-4 mt-2 block w-full border-1px border-bone rounded-lg px-3 py-2 text-bone text-18a leading-150% font-normal"
          label="E-mail"
          labelClassNameList="text-bone leading-150% text-12a "
          type="email"
          id="login-email-id"
          onChange={(e) => setEmailValue(e)}
          placeholder="example@site.com"
          name="email"
        />
        <Input
          withLabel={true}
          classNameList="relative mb-4 mt-2 block w-full border-1px border-bone rounded-lg px-3 py-2 text-bone text-18a leading-150% font-normal"
          label="Password"
          labelClassNameList="text-bone leading-150% text-12a "
          type="password"
          id="login-password-id"
          onChange={(e) => setPasswordValue(e)}
          name="password"
        />
        <Button
          classNameList="text-center mb-4 w-full bg-bone border border-gray-300 hover:border-gray-500 px-3 py-3.5 rounded-md text-18px leading-150% text-white"
          withImg={false}
          type="submit"
          btnText="Log in"
        />
        {error.length ? (
          <div className="text-[#E53E3E] text-center">{error[0][0]}</div>
        ) : null}

        <Input
          withLabel={true}
          classNameList="flex items-center justify-center flex-col mr-3"
          parentClassNameList="flex items-center justify-center flex-row-reverse mb-2"
          type="checkbox"
          label="Keep me signed in"
          labelClassNameList="text-labelBlack leading-150% text-14a font-semibold cursor-pointer"
          id="keep"
          name="keep"
        />
      </form>
      <div className="flex items-center justify-center">
        <p className="text-14a leading-150% text-labelBlack mr-1">
          Forgot your password?
        </p>
        <a className="text-14a leading-150% text-loginBlue" href="">
          Reset it here
        </a>
      </div>
      {isLoading && (
        <Circles
          height="60"
          width="60"
          color="#325FE5"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="items-center justify-center mt-3"
          visible={true}
        />
      )}
    </div>
  );
};
export default LoginItem;
