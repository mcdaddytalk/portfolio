import { SectionHeadingProps } from "@/lib/types";
import React from "react";

export default function SectionHeading({ children }: Readonly<SectionHeadingProps>) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}