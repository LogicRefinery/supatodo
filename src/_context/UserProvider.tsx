"use client";

import { profiles } from "@prisma/client";
import { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "../../utils/supabase/client";
import { client_user_service } from "@/_services/client/user";

interface UserContextType {
  user: User | null;
  customInfo: profiles | null;
}

const userContext = createContext<UserContextType>({
  user: null,
  customInfo: { id: "", first_name: "", last_name: "" },
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [customInfo, setCustomInfo] = useState<profiles | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (user) {
          const customInfo = await client_user_service.read({ id: user.id });
          setUser(user);
          setCustomInfo(customInfo);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, customInfo }}>
      {children}
    </userContext.Provider>
  );
}
export const useUserContext = () => useContext(userContext);
export default UserProvider;
