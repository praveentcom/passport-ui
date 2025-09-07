import React from "react";

const Link = ({ href, children, ...props }: any) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export const useRouter = () => ({
  push: (href: string) => console.log("Navigate to:", href),
  replace: (href: string) => console.log("Replace with:", href),
  back: () => console.log("Go back"),
  forward: () => console.log("Go forward"),
  refresh: () => console.log("Refresh"),
  prefetch: (href: string) => console.log("Prefetch:", href),
});

export default Link;
export { Link };
