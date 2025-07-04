import type { FC } from "react";

interface IHomePageProps {}

export const HomePage: FC<IHomePageProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        fontSize: "24px",
        color: "#333",
      }}
    >
      <h1>Welcome to Social Media</h1>
    </div>
  );
};
