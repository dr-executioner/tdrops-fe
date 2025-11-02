import { MenuItem } from "@/types/twitch.type";
import { signIn, signOut } from "next-auth/react";

export const images = {
  logoWhite: "/Dropr_white_cutout.png",
  logoPurple: "/Dropr_purple.png",
};

export const menuItem: MenuItem = {
  authenticated: [
    {
      id: 1,
      label: "Profile",
      path: "/profile",
      action: "",
    },
    {
      id: 2,
      label: "Settings",
      path: "/settings",
      action: "",
    },
    {
      id: 3,
      label: "Log Out",
      path: "/logout",
      action: signOut,
    },
  ],
  notAuthenticated: [
    {
      id: 1,
      label: "Log In",
      path: "/login",
      action: signIn,
    },
  ],
};
