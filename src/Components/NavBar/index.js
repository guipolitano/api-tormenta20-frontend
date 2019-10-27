import React from 'react';

import { Container, Logo } from './styles';

export default function NavBar() {
  return (
    <Container>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://jamboeditora.com.br/"
      >
        <Logo />
      </a>
    </Container>
  );
}
