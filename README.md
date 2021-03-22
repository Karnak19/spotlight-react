# spotlight-react

## Getting starter

```sh
npm i react react-dom react-router-dom
```

## Usage

```jsx
import { Spotlight, useSpotlight } from 'spotlight-react';

export default function Router() {
  const { isActive, keyboardShortcuts, blur } = useSpotlight(' '); // keyboard shortcut combined to ctrlKey

  keyboardShortcuts();

  const exampleRoutes = [
    {
      name: 'User',
      path: '/user',
      children: [
        {
          name: 'Dashboard',
          path: '/dashboard',
          children: [
            {
              name: 'Edit infos',
              path: '/edit',
            },
          ],
        },
      ],
    },
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Infos',
      path: '/infos',
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
