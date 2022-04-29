import React from "react";
import "../styles/global.css";
import { Login } from "../containers/Login";
import { Layout } from "../containers/Layout";

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default App;
