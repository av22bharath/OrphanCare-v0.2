import React, { createContext, useContext, useState } from 'react';

interface Orphanage {
  id: string;
  orphanage_name: string;
  location: string;
  capacity: number;
  established_date: string;
  bank_details_id: string;
  male_count: number;
  female_count: number;
}

interface User {
  id: string;
  email: string;
  role: string;
  isVerified: boolean;
}

interface UserContextType {
  user: User | null;
  orphanages: Orphanage[];
  sessionToken: string | null;
  setUserData: (user: User, orphanages: Orphanage[], token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  const setUserData = (user: User, orphanages: Orphanage[], token: string) => {
    setUser(user);
    setOrphanages(orphanages);
    setSessionToken(token);
  };

  const logout = () => {
    setUser(null);
    setOrphanages([]);
    setSessionToken(null);
  };

  return (
    <UserContext.Provider value={{ user, orphanages, sessionToken, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  console.log("context:",ctx)
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
};
