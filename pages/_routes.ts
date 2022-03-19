type Route = {
  path: string;
  title: string;
};

const routes: Route[] = [
  { path: "/about", title: "About" },
  { path: "/work", title: "My Work" },
  { path: "/skill", title: "Skills" },
  { path: "/edu", title: "Learning" },
];

export function getRoute(path: string) {
  return routes.find(({ path: _path }) => _path === path);
}

export default routes;
