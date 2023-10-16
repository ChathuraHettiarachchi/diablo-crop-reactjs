import React from "react";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <p className="font-mono text-xl text-white md:text-4xl">Diablo Corp</p>
      <p className="font-mono text-white">Payroll</p>
    </Link>
  );
};

export default HeaderLogo;
