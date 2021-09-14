import React, { useEffect } from "react";

const withLayout = (
  WrappedComponent: React.FC<any>,
) => () => {

  useEffect(() => window.scrollTo(0, 0), []);

  return (
      <WrappedComponent />
  );
};

export default withLayout;
