"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export function Clarity() {
  useEffect(() => {
    clarity.init("ty8j32fngk");
  }, []);

  return null;
}