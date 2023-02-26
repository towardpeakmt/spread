import React, { FC } from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  withLabel: boolean;
  label: string;
  classNameList: string;
  onChange?: (e: string) => void;
  value?: string;
  labelClassNameList?: string;
  parentClassNameList?: string;
}

const Input: FC<InputProps> = (props) => {
  const {
    id,
    withLabel,
    label,
    name,
    type,
    classNameList,
    placeholder,
    onChange,
    value,
    parentClassNameList,
    labelClassNameList,
  } = props;
  return (
    <div className={parentClassNameList}>
      <label
        htmlFor={id}
        className={`${withLabel ? labelClassNameList : "hidden"}`}
      >
        {label}
      </label>
      {onChange ? (
        <input
          id={id}
          name={name}
          type={type}
          required={true}
          className={classNameList}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={classNameList}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
