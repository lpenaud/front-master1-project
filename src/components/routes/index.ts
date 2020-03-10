import { ComponentType } from "react";
import Root from "./root";

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
  }
];

export default routes;
