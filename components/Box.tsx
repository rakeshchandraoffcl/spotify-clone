"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  className?: string;
}

export const Box: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, className }) => {
  return (
    <div className={twMerge(`h-fit w-full rounded-lg bg-neutral-900`, className)}>{children}</div>
  );
};
