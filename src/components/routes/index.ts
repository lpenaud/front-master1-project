import { ComponentType } from "react";
import Root from "./root";
import Connection from "./connection";
import Movie from "./movie";

interface Route {
  path: string;
  component: ComponentType;
  label: string;
}

const routes: Route[] = [
  {
    path: "/",
    component: Root,
    label: "Accueil",
  },
  {
    path: "/connection",
    component: Connection,
    label: "Connexion",
  },
  {
    path: "/movie",
    component: Movie,
    label: "Films",
  }
];

export default routes;
