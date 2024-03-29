# spotlight-react

## Getting starter

```sh
npm i react react-dom react-router-dom spotlight-react
```

## Usage

```js
// index.js
import ReactDOM from "react-dom";
import Router from "./Router";

import "spotlight-react/dist/spotlight-react.css";

ReactDOM.render(<Router />, document.querySelector("#root"));
```

```jsx
// Router.jsx
import { Spotlight, useSpotlight } from "spotlight-react";

export default function Router() {
  const { isActive, blur } = useSpotlight(" "); // keyboard shortcut combined to ctrlKey

  const exampleRoutes = [
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
  ];

  return (
    <BrowserRouter>
      <Switch>// Your routes goes here</Switch>
      {isActive && <Spotlight blur={blur} routes={exampleRoutes} />}
    </BrowserRouter>
  );
}
```

![](https://i.imgur.com/i5hSES2.png)
![](https://i.imgur.com/HX4xCEs.png)

You can navigator with your arrow keys up and down, or directly click on the route you want
