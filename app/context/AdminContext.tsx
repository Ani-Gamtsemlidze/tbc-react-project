"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getUser } from "../../user-api";

// Define the UserContext type
interface UserContextProps {
  user: any;
  isAdmin: boolean;
  isLoading: boolean;
  userdata: any;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userdata, setUserData] = useState<any[]>([]);

  useEffect(() => {
    if (user?.sub) {
      fetchUser(user.sub);
    }
  }, [user]);

  const fetchUser = async (userId: string) => {
    if (user) {
      const userData = await getUser(userId);
      setUserData(userData[0]);
      if (userData[0].isadmin) {
        setIsAdmin(true);
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, isAdmin, isLoading, userdata }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
