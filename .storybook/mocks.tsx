import React from "react";

const Link = ({ href, children, ...props }: any) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
export { Link };
