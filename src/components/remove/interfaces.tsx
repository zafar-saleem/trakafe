import React from "react";

export interface Props {
  children?: React.ReactNode;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  removeItem: (arg: number) => void;
  id: number;
}
