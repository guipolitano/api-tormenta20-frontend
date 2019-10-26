import React from 'react';

import { Card } from './styles';

export default function CardElement(props){
  return (
    <Card>
      {props.children}
    </Card>
  );
}
