"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import React from "react";

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
