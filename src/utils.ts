import type { NotNestedRoute, Route, RouteWithCompletePath } from "./types";

export function fullPathCreator(
  array: Route[],
  parentPath: string | undefined = undefined
): RouteWithCompletePath[] {
  return array.map((el) => {
    const route = {
      ...el,
      path: parentPath ? `${parentPath}${el.path}` : el.path,
    };

    if (route.children) {
      route.children = fullPathCreator(route.children, route.path);
    }

    return route;
  });
}

export function flatten(
  array: Array<Route | RouteWithCompletePath>
): NotNestedRoute[] {
  const flat: NotNestedRoute[] = [];
  array.forEach((item) => {
    flat.push({
      name: item.name,
      path: item.path,
    });
    if (Array.isArray(item.children)) {
      flat.push(...flatten(item.children));
    }
  });

  return flat;
}
