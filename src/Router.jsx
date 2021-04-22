import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spotlight, useSpotlight } from "../dist/spotlight-react.es";
import App from "./App";

export default function Router() {
  const { isActive, keyboardShortcuts, blur } = useSpotlight(" ");

  keyboardShortcuts();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={App} />
        <Route />
      </Switch>
      {isActive && (
        <Spotlight
          blur={blur}
          routes={[
            {
              name: "User",
              path: "/user",
              children: [
                {
                  name: "Dashboard",
                  path: "/dashboard",
                  children: [
                    {
                      name: "Edit infos",
                      path: "/edit",
                    },
                  ],
                },
              ],
            },
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Infos",
              path: "/infos",
            },
          ]}
        />
      )}
    </BrowserRouter>
  );
}
