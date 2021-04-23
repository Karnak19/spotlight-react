import React from "react";
import { useLocation, useParams } from "react-router";

function App({}) {
  const { pathname } = useLocation();
  return (
    <div>
      <p>hello {pathname}</p>
    </div>
  );
}

export default App;
