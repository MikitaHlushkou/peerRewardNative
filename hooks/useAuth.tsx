import { useState, createContext, useContext, ReactNode, useEffect } from 'react';

import { StateHandler } from '../types';

export interface IUserProfile {
  name: string;
  email: string;
  id: string;
  userAvatarUrl: string;
  accountMoney: string;
  sendMoneyAmount: string;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: StateHandler<boolean>;
  setUserData: StateHandler<IUserProfile>;
  userData: IUserProfile;
}

const initialUserData = {
  name: '',
  email: '',
  id: '',
  userAvatarUrl: '',
  sendMoneyAmount: '',
  accountMoney: '',
};

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUserData: () => {},
  userData: initialUserData,
} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<IUserProfile>(initialUserData);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    setUserData,
    userData,
  };

  useEffect(() => {
    if (!!userData?.id) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, [userData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
