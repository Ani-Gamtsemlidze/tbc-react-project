"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { filterProducts, getUser } from "../../user-api";
import { SelectChangeEvent } from "@mui/material";

interface UserContextProps {
  user: UserProfile | undefined;
  isAdmin: boolean;
  isLoading: boolean;
  userdata: any;
  handleChange: (event: SelectChangeEvent<string>) => Promise<void>;
  filteredData: string[];
  price: any;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userdata, setUserData] = useState<any[]>([]);
  const [price, setPrice] = React.useState<any>("");

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (user?.sub) {
      fetchUser(user.sub);
    }
  }, [user]);

  const handleChange = async (event: SelectChangeEvent<typeof price>) => {
    const selectedValue = event.target.value;
    setPrice(selectedValue);

    let filter1 = 0;
    let filter2 = 0;

    if (selectedValue === 1) {
      filter1 = 5;
      filter2 = 20;
    } else if (selectedValue === 2) {
      filter1 = 20;
      filter2 = 50;
    } else if (selectedValue === 3) {
      filter1 = 50;
      filter2 = 150;
    }

    const products = await filterProducts(filter1, filter2);
    setFilteredData(products);
  };

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
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        isLoading,
        userdata,
        handleChange,
        filteredData,
        price,
      }}
    >
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
