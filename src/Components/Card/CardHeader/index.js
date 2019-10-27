import React from 'react';

import { CardHeader } from './styles';

export default function CardHeaderComponent(props) {
  return (
    <CardHeader>{props.children}</CardHeader>
  );
}
