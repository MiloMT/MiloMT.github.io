import type { Metadata } from "next";
import "../globals.css";
import "../tokens.css";
import React from "react";
import ReactDOM from "react-dom";

export const metadata: Metadata = {
  title: "MylesTaylorDev",
  description: "Portfolio website",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  ReactDOM.preload("/fonts/Raleway-Regular.ttf", { as: "font" });
  ReactDOM.preload("/fonts/Roboto-Regular.ttf", { as: "font" });

  return (
    <html>
      <body className="bg-neutral-950 text-neutral-100 text-md">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
