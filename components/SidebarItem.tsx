"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  active: Boolean;
  href: string;
  label: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, active, href, label }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 text-base font-medium text-neutral-400 transition hover:text-white",
        active && "text-white",
      )}
    >
      <Icon size={20} />
      <p className="w-full truncate">{label}</p>
    </Link>
  );
};
