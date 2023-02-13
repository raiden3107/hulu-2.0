import React from "react";
import HeaderComponent from "./HeaderComponent";
import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex">
        <HeaderComponent title={"HOME"} Icon={HomeIcon} />
        <HeaderComponent title={"TRENDING"} Icon={BoltIcon} />
        <HeaderComponent title={"VERIFIED"} Icon={CheckBadgeIcon} />
        <HeaderComponent title={"COLLECTION"} Icon={CircleStackIcon} />
        <HeaderComponent title={"SEARCH"} Icon={MagnifyingGlassIcon} />
        <HeaderComponent title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <h1 className="textIcon hover:animate-pulse">hulu</h1>
    </header>
  );
}

export default Header;
