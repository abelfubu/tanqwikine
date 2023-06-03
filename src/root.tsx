import "../pollen.css";
import { Button } from "./components/button/button";
import "./global.scss";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <h1>Button</h1>
        <Button>Click Me</Button>
        <Button icon="close">Close</Button>
      </body>
    </>
  );
};
