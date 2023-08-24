"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

const SuperbaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [superbaseClient] = useState(() => createClientComponentClient<Database>());
  return (
    <SessionContextProvider supabaseClient={superbaseClient}>{children}</SessionContextProvider>
  );
};

export default SuperbaseProvider;
