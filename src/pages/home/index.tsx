import React from "react";

import { withLayout } from "HOC";
import { TextEditor } from "components";

const Home: React.FC = () => {
  return (
    <section className="home">
      <TextEditor />
    </section>
  );
};

export default withLayout(Home);
