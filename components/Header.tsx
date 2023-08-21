"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({ children, className }) => {
  const router = useRouter();
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden gap-x-2 md:flex">
          <button
            className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={25} />
          </button>
          <button
            className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75"
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={25} />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {/* TODO: Check if gap-x-4 applicable  */}
        <div className="flex items-center justify-between">
          <>
            <div>
              <Button className="text-neutral bg-transparent font-medium">Sign Up</Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2 text-black">Login</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};
