import { $, component$, useSignal } from "@builder.io/qwik";
import "../pollen.css";
import { Button } from "./components/button/button";
import { Dialog } from "./components/dialog/dialog";
import { Input } from "./components/input/input";
import { Link } from "./components/link/link";
import { Menu } from "./components/menu/menu";
import { ProgressBar } from "./components/progress-bar/progress-bar";
import "./global.scss";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <ButtonExample />
        <ProgressBarExample />
        <InputExample />
        <LinkExample />
        <DialogExample />
        <MenuExample />
      </body>
    </>
  );
};

const MenuExample = component$(() => {
  const open = useSignal(true);

  return (
    <>
      <h1>Menu</h1>
      <Menu open={open}>
        <Button
          q:slot="trigger"
          onClick$={() => {
            open.value = !open.value;
          }}
          img={{
            src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            alt: "Tree",
            width: 18,
            height: 18,
          }}
        >
          Menu
        </Button>
        <div q:slot="content">
          <li>Hello</li>
        </div>
      </Menu>
    </>
  );
});

const DialogExample = component$(() => {
  const open = useSignal(false);

  const toggleDialog = $(() => {
    open.value = !open.value;
  });

  return (
    <>
      <h1>Dialog</h1>
      <Dialog open={open} closeOnBackdropClick={true}>
        <Button q:slot="trigger" onClick$={toggleDialog}>
          Trigger
        </Button>
        <div q:slot="content">
          <form
            action="dialog"
            preventdefault:submit
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h3>Some Dialog Content</h3>
            <Input />
            <Button>Submit</Button>
          </form>
        </div>
      </Dialog>
    </>
  );
});

const LinkExample = component$(() => {
  return (
    <>
      <h1>Link</h1>
      <Link>Home</Link>
    </>
  );
});
const InputExample = component$(() => {
  return (
    <>
      <h1>Input</h1>
      <Input name="name" />
    </>
  );
});

const ProgressBarExample = component$(() => {
  const loading = useSignal(false);

  const toggleLoading = $(() => {
    loading.value = !loading.value;
  });

  return (
    <>
      <h1>Progress Bar</h1>
      <Button onClick$={toggleLoading}>
        {loading.value ? "Stop" : "Click Me"}
      </Button>
      <br></br>
      <ProgressBar loading={loading.value} />
    </>
  );
});

const ButtonExample = component$(() => (
  <>
    <h1>Button</h1>
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <Button>Click Me</Button>
      <Button accent={true}>Accent</Button>
      <Button icon="close">Close</Button>
      <Button
        img={{
          src: "/img/Perfil.png",
          alt: "Profile picture",
          width: 18,
          height: 18,
        }}
      >
        Logout
      </Button>
    </div>
  </>
));
