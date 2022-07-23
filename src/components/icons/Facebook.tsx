import React from "react";

type Props = React.ComponentPropsWithoutRef<"svg">;

export const Facebook: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="128"
    height="128"
    x="0"
    y="0"
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M32 6C17.642 6 6 17.642 6 32c0 13.035 9.603 23.799 22.113 25.679V38.89H21.68v-6.834h6.433v-4.548c0-7.529 3.668-10.833 9.926-10.833 2.996 0 4.583.223 5.332.323v5.965h-4.268c-2.656 0-3.584 2.52-3.584 5.358v3.735h7.785l-1.055 6.834h-6.73v18.843C48.209 56.013 58 45.163 58 32 58 17.642 46.359 6 32 6z"></path>
  </svg>
);
