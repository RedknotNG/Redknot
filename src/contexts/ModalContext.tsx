"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ModalContext = {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContext | null>(null);

export default function ModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <ModalContext.Provider value={{ modalActive, setModalActive }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("use modal context within the context provider");
  }
  return context;
}
