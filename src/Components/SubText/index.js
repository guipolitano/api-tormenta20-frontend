import React from "react";

import { SubText } from "./styles";

export default function SubTextComponent(props) {
  const { text } = props;
  return (
    <SubText>
      <i>{text}</i>
    </SubText>
  );
}
