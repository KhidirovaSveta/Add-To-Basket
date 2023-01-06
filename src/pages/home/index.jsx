import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      Home
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product List Website</title>
        <meta description="this is home page" />
      </Helmet>
    </div>
  );
};

export default Home;
