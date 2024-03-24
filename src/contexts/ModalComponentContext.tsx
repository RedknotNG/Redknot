"use client";

import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ModalContext = {
  modal: ReactElement;
  setModal: Dispatch<SetStateAction<ReactElement>>;
};

const ModalComponentContext = createContext<ModalContext | null>(null);

export default function ModalComponentContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [modal, setModal] = useState(<ModalInit />);

  return (
    <ModalComponentContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalComponentContext.Provider>
  );
}

export function useModalComponentContext() {
  const context = useContext(ModalComponentContext);

  if (!context) {
    throw new Error("use modal context within the context provider");
  }
  return context;
}

function ModalInit() {
  return <div></div>;
}
