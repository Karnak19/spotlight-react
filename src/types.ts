export interface Route {
  name: string;
  path: string;
  children?: Route[];
}

export interface RouteWithCompletePath extends Route {}

export type NotNestedRoute = Pick<Route, "name" | "path">;
