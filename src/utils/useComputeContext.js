import { createContext, useContext } from "react";

export const ComputeContext = createContext(undefined);

export function useComputeContext() {
  const computeContext = useContext(ComputeContext);
  return computeContext;
}