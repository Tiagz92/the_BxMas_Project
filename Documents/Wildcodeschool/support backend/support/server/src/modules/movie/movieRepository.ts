import client from "../../../database/client";

const readMovie = () => {
  return client.query("SELECT * FROM movie;");
}

const readMovieById = (id) => {
	return client.query("SELECT * FROM movie WHERE id = ?" , [id]);
}

export default { readMovie, readMovieById };