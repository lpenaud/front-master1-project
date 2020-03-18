import { ComponentType } from "react";
import Root from "./root";
import Connection from "./connection";
import Movies from "./movies";
import AddMovie from "./add-movie";
import Search from "./search";

interface Route {
  path: string;
  component: ComponentType;
  label?: string;
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
  },
  {
    path: "/movies",
    component: Movies,
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
