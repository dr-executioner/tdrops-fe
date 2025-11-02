"use client"

import { useSession } from "next-auth/react";
import AvatarComponent from "./_components/Avatar";
import Logo from "./_components/logo/Logo";
import Search from "./_components/search/Search";

export default function Home() {
  const { data, status } = useSession()

  console.log("Home", data)
  if (status === "loading") return <div>Loading...</div>
  return (
    <div className="">
      <div className="min-w-full border-b-2">
        <div className="p-4 flex justify-between items-center">
          <Logo type="purple" size={80} />
          <Search />
          <AvatarComponent image={data?.user?.image} />
        </div>
      </div>
    </div>
  );
}
