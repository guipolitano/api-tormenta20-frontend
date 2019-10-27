import React from 'react';

import { H1 } from './styles';

export default function H1Component(props) {
  return (
    <H1>
        {props.children}
    </H1>
  );
}
