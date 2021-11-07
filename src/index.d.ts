export interface Route {
  name: string;
  path: string;
  children?: Route[];
}

/**
 * This route got a complete path
 */
export interface RouteWithCompletePath extends Route {}

export type NotNestedRoute = Pick<Route, "name" | "path">;
