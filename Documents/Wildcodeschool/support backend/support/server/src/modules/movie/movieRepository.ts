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

const updateMovie = (movie: Movie, id: number) => {
	return client.query<Result>("UPDATE movie SET ? WHERE id = ?", [movie, id]);
}

const deleteMovie = (id: number) => {
	return client.query<Result>("DELETE FROM movie WHERE id = ?", [id]);
}

export default { readMovies, readMovieById, createMovie, updateMovie, deleteMovie };