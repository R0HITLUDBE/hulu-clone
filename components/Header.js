import Image from "next/dist/client/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} link='/' />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} link="/?genre=fetchTrending" />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#8BC34A" d="M29,15h4v18h-4V15z M43,33h-4c-2.2,0-4-1.8-4-4v-9h4v8c0,0.6,0.5,1,1,1h2c0.6,0,1-0.5,1-1v-8h4v9C47,31.2,45.2,33,43,33z M22.9,33H19c-2.2,0-4-1.8-4-4v-9h4v7.9c0,0.6,0.5,1.1,1.1,1.1h1.8c0.6,0,1.1-0.5,1.1-1.1V20h4v9C26.9,31.2,25.1,33,22.9,33z M9,20H5v-5H1v9v9h4v-8c0-0.5,0.4-1,1-1h2c0.5,0,1,0.4,1,1v8h4v-9C13,21.8,11.2,20,9,20z"></path>
      </svg>
    </header>
  );
};

export default Header;
