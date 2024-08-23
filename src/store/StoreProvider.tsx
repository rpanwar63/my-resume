"use client";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./store";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};
