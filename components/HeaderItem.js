import Link from "next/link";
import React from "react";

const HeaderItem = ({ title, Icon, link = '/' }) => {
  return (
    <Link href={link}>
      <div className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
        <Icon className="h-8 mb-1 group-hover:animate-bounce " />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default HeaderItem;
