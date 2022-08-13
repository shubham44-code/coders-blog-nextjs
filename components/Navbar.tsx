import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex ">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className="font-bold ml-2 text-primary">Coders Blog</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
