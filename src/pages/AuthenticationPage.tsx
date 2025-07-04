import type { FC } from "react";
import { AuthenticationForm } from "../components/authentication-form/AuthenticationForm";

interface IAuthenticationPageProps {
  mode: "signin" | "signup";
}

export const AuthenticationPage: FC<IAuthenticationPageProps> = ({ mode }) => {
  return <AuthenticationForm mode={mode} />;
};
