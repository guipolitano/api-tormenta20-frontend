import React from 'react';

import { Button } from './styles';

export default function ButtonComponent(props) {
    const { text, color, margin, onClick, type} = props;
  return (
    <Button
      type={type}
      color={color}
      margin={margin}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
