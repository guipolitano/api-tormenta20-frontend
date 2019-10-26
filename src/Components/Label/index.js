import React from 'react';

import { Label } from './styles';

export default function LabelElement(props){
  return (
    <Label>
        {props.text}
    </Label>
  );
}
