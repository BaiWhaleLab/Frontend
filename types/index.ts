import { ReactNode } from "react";
import { SxProps } from "@mui/material";
import type { theme } from "../components/theme";

export interface AppProps {
  children: ReactNode;
}

export type Sx = SxProps;
