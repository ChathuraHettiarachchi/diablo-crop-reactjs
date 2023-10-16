"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

import { CircleImage, HeaderLogo } from ".";
import { navLinks } from "../utils/constant";

const Header = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div>
        <nav className="sticky flex items-center justify-between bg-blue-950 px-8 py-6">
          {/* left side */}
          <section className="flex items-center gap-4">
            <FiMenu
              className="cursor-pointer text-3xl text-white md:hidden"
              onClick={() => setMenuOpened(true)}
            />
            <HeaderLogo />
          </section>

          {/* sidebar mobile menu */}
          <div
            className={clsx(
              "fixed right-0 top-0 h-full w-screen -translate-x-full bg-black/50 backdrop-blur-sm transition-all md:hidden",
              isMenuOpened && "translate-x-0",
            )}
          >
            <section className="absolute left-0 top-0 z-50 flex h-screen w-56 flex-col gap-8 bg-white p-8 text-black">
              <IoCloseOutline
                className="courser-pointer mb-8 mt-0 text-3xl"
                onClick={() => setMenuOpened(false)}
              />
              {navLinks.map((item, i) => (
                <Link key={i} href={item.href} className="font-bold">
                  {item.label}
                </Link>
              ))}
            </section>
          </div>

          {/* right side */}
          <section className="flex items-center gap-4">
            <p className="gap-4 text-[15px] text-white">Administrator</p>
            <CircleImage
              url="https://i.pravatar.cc/150?img=3"
              alt="userImage"
              width={50}
              height={50}
            />
          </section>
        </nav>
        <div className="hidden md:block">
          <hr />
          <div className="flex h-14 items-center gap-10 bg-slate-200 pr-10 md:justify-center lg:justify-end">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="font-bold text-gray-600 hover:text-gray-800"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
