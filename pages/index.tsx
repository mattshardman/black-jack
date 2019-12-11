import React from "react";
import Head from "next/head";
import { register, unregister } from "next-offline/runtime";

import Home from "../components/Home";

function Index() {
  React.useEffect(() => {
    register();

    return () => unregister();
  }, []);

  return (
    <>
      <Head>
        <title>Wack Jack</title>
      </Head>
      <Home />
    </>
  );
}

export default Index;
