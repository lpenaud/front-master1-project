import { ComponentType } from "react";
import Root from "./root";
import Connection from "./connection";
import Movie from "./movie";
import AddMovie from "./addMovie";
import Search from "./search";

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
  },
  {
    path: "/search",
    component: Search,
    label: "Recherche Films",
  },
  {
    path: "/addmovie",
    component: AddMovie,
    label: "Ajout Films",
  }
];

export default routes;
