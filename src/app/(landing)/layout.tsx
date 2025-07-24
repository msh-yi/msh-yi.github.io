// src/app/(landing)/layout.tsx

import Head from 'next/head';
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
