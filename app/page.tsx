"use client"

import { useSession } from "next-auth/react";
import AvatarComponent from "./_components/Avatar";
import Logo from "./_components/logo/Logo";
import Search from "./_components/search/Search";
import { menuItem } from "../constants/constants";
import Dropdown from "./_components/Dropdown";

export default function Home() {
  const { data, status } = useSession()

  const authData = status === "authenticated" ? menuItem.authenticated : menuItem.notAuthenticated

  console.log("Home", data)
  console.log("Home", status)

  if (status === "loading") return <div>Loading...</div>

  return (
    <div className="">
      <div className="min-w-full border-b-2">
        <div className="p-4 flex justify-between items-center">
          <Logo type="purple" size={100} />
          <Search />
          <Dropdown dropDownItems={authData}>
            <div className="cursor-pointer">
              <AvatarComponent image={data?.user?.image || null} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
