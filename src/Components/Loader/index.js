import React from 'react';

import { Loader } from './styles';

export default function LoaderComponent(props) {
  const { align, color, margin } = props;
  return (
    <Loader margin={margin} align={align} color={color} className="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Loader>
  );
}
