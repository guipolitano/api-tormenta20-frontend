import React from "react";

import { Input } from "./styles";

export default function InputComponent(props) {
  const { value, placeholder, onChange, onKeyDown } = props;
  return (
    <Input
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
