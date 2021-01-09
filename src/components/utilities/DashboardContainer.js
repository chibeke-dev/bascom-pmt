import React from "react";

export default function DashboardContainer(props) {
  return (
    <main
      className={
        props.className +
        "lg:px-32 md:px-16 px-3 container overflow-y-auto h-screen"
      }
    >
      {props.children}
    </main>
  );
}
