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
        color: "var(--primary-blue)",
        textShadow: "0 0 6rem var(--primary-blue)"
      }}
    >
      <h1>Welcome to Social Media</h1>
    </div>
  );
};
