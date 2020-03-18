import auth from "./auth";
import { IMovie } from "../../lib/models";
import Axios from "axios";

interface MovieResult extends Omit<IMovie, "releaseDate"> {
  releaseDate: number;
}

function formatResult(m: MovieResult): IMovie {
  return {
    ...m,
    releaseDate: new Date(m.releaseDate),
  };
}

export async function getMovies(): Promise<IMovie[]> {
  const res = await Axios.get<MovieResult[]>(`${process.env.REACT_APP_BASE_URL_API}/movie`);
  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.data.map(formatResult);
}

export async function findMovies({ title, before, after }: { title?: string; before?: string | number | Date; after?: string | number | Date; }) {
  if (before) {
    before = new Date(before).getTime().toString();
  }
  if (after) {
    after = new Date(after).getTime().toString();
  }
  const res = await Axios.get<MovieResult[]>(`${process.env.REACT_APP_BASE_URL_API}/find`, {
    params: {
      title,
      before,
      after,
    },
  });
  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.data.map(formatResult);
}

export async function newMovie({ cover, description, releaseDate, title }: Omit<IMovie, "cover" | "id" | "releaseDate"> & { cover: File; releaseDate: number | string | Date; }): Promise<IMovie> {
  if (!auth.isAuth) {
    throw new Error("Not authentifiate");
  }
  const formData = new FormData();
  formData.append("cover", cover, cover.name);
  formData.append("description", description);
  formData.append("releaseDate", new Date(releaseDate).getTime().toString());
  formData.append("title", title);
  const res = await Axios.post<MovieResult>(`${process.env.REACT_APP_BASE_URL_API}/movie`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return formatResult(res.data);
}
