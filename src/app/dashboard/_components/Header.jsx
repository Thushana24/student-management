"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

const Header = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div className="flex justify-between p-4 border shadow-sm ">
      <div></div>
      <div>
        {user?.picture ? (
          <Image
            src={user.picture}
            width={35}
            height={35}
            alt="user"
            className="rounded-full"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
