declare module 'react-console-emulator' {
  import { ComponentType } from 'react';

  interface TerminalProps {
    commands: Record<
      string,
      {
        description?: string;
        usage?: string;
        fn: (...args: string[]) => string | void;
      }
    >;
    welcomeMessage?: string;
    promptLabel?: string;
    style?: React.CSSProperties;
    className?: string;
  }

  const Terminal: ComponentType<TerminalProps>;

  export default Terminal;
}
