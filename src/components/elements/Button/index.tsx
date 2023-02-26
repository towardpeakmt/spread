import React, { FC } from "react";

interface ButtonProps {
  classNameList: string;
  withImg?: boolean;
  imgLink?: string;
  btnText: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button type={props.type} className={props.classNameList}>
      {props.withImg && <img className={`w-5 mr-3`} src={props.imgLink} />}
      {props.btnText}
    </button>
  );
};

export default Button;
