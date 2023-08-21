"use client";
import { Box } from "@/components/Box";
import { Library } from "@/components/Library";
import { SidebarItem } from "@/components/SidebarItem";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

const Sidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathName = usePathname();
  const routes = useMemo(() => {
    return [
      {
        label: "Home",
        active: pathName !== "/search",
        icon: HiHome,
        href: "/",
      },
      {
        label: "Search",
        active: pathName == "/search",
        icon: BiSearch,
        href: "/search",
      },
    ];
  }, []);
  return (
    <div className="flex h-full">
      <div className="hidden h-full w-[300px] flex-col gap-y-2 p-2 md:flex">
        <Box>
          <div className="flex flex-col gap-y-4 px-4 py-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>
      <main className="flex h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
