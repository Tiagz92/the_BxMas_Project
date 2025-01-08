import client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Movie {
	id: number,
  title: string
}

const readMovies = () => {
  return client.query("SELECT * FROM movie;");
}

const readMovieById = (id : number) => {
	return client.query<Rows>("SELECT * FROM movie WHERE id = ?" , [id]);
}

const createMovie = (movie : Movie) => {
	return client.query<Result>("INSERT INTO movie (title) VALUES (?)", [movie.title]);
}

export default { readMovies, readMovieById, createMovie };