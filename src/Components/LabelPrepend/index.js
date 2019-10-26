import React from "react";
import Input  from "../Input";
import { InputLabel, LabelPrepend } from "./styles";

export default function LabelPrependComponent(props) {
  const { text, value, placeholder, onChange, onKeyDown } = props;
  return (
    <LabelPrepend>
      <InputLabel>{text}</InputLabel>
      <Input
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {props.children}
    </LabelPrepend>
  );
}
