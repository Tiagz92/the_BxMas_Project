import client from "../../../database/client";
import type { Rows } from "../../../database/client";

const readMovie = () => {
  return client.query("SELECT * FROM movie;");
}

const readMovieById = (id : number) => {
	return client.query<Rows>("SELECT * FROM movie WHERE id = ?" , [id]);
}

export default { readMovie, readMovieById };