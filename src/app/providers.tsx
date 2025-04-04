"use client";

import { ThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";
import theme from "./muiTheme";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
