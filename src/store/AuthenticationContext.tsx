import { createContext } from "react";
import { AUTHENTICATION_CONTEXT_DEFAULT_VALUE } from "../constants";

interface AuthenticationContextType {
  isLoggedIn: boolean;
}

export const AuthenticationContext = createContext<AuthenticationContextType>(
  AUTHENTICATION_CONTEXT_DEFAULT_VALUE
);
