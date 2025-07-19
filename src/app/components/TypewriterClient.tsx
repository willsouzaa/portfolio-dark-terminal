'use client'; // <-- Importante para ser Client Component

import Typewriter from 'typewriter-effect';

export default function TypewriterClient() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevSecOps",
          "Linux Defender",
          "Docker Enthusiast",
          "Full Stack",
          "Segurança da Informação",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
