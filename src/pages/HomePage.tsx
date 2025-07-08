import type { FC } from "react";
import { AuthenticationForm } from "../components/authentication-form/AuthenticationForm";
import "../components/authentication-form/AuthenticationForm.css"

interface IHomePageProps {}

export const HomePage: FC<IHomePageProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        fontSize: "24px",
        color: "var(--primary-blue)",
        textShadow: "0 0 6rem var(--primary-blue)",
        gap: "10rem",
      }}
    >
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <h1>Welcome to Social Media</h1>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <AuthenticationForm mode="signin" />
        </div>
      </div>
    </div>
  );
};
