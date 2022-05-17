import { ReactElement } from "react";

// Components
import Navbar from "./Navbar";

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
