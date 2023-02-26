import { SyntheticEvent, useState, FC } from "react";
import { Circles } from "react-loader-spinner";

import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";
import apiReq from "@/api/api";

interface SignupProps {
  setOpenTab: () => void;
}

const Signup: FC<SignupProps> = ({ setOpenTab }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");

  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const clearStates = () => {
    setEmailValue("");
    setPasswordValue("");
    setPasswordConfirmValue("");
  };

  const onFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (passwordValue !== passwordConfirmValue) {
      // setError("Password mismatch");
      setPasswordConfirmValue("");
      return;
    }

    const obj = {
      email: emailValue,
      password: passwordValue,
      password_confirmation: passwordConfirmValue,
    };

    setIsLoading(true);

    apiReq.auth
      .register(obj)
      .then(() => {
        clearStates();
        setOpenTab();
        setError([]);
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
        btnText="Sign up with Google"
      />
      <Button
        classNameList="flex items-center flex-wrap my-4 w-full border border-gray-300 hover:border-gray-500 px-3 py-2 rounded-md text-18px leading-150% text-[#333A49]"
        withImg={true}
        imgLink="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        btnText="Sign up with Microsoft"
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
          id="register-email-id"
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
          id="register-password-id"
          onChange={(e) => setPasswordValue(e)}
          name="password"
        />
        <Input
          withLabel={true}
          classNameList="relative mb-4 mt-2 block w-full border-1px border-bone rounded-lg px-3 py-2 text-bone text-18a leading-150% font-normal"
          label="Password confirmation"
          labelClassNameList="text-bone leading-150% text-12a "
          type="password"
          id="password-confirm-id"
          onChange={(e) => setPasswordConfirmValue(e)}
          value={passwordConfirmValue}
          name="passwordConfirm"
        />
        <Button
          classNameList="text-center mb-4 w-full bg-bone border border-gray-300 hover:border-gray-500 px-3 py-3.5 rounded-md text-18px leading-150% text-white"
          withImg={false}
          btnText="Sign up"
          type="submit"
        />
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
        {error.length ? (
          <div className="text-[#E53E3E] text-center">{error[0][0]}</div>
        ) : null}
      </form>
    </div>
  );
};
export default Signup;
