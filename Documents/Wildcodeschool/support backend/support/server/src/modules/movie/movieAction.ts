import type { Request, Response } from "express";
import movieRepository from "./movieRepository";

interface Movie {
	id: number,
	title: string
}

const getMovies =async (req : Request, res : Response) => {
	try {
		const [movies] = await movieRepository.readMovie();
	res.json(movies);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
	
};

const getOne = async (req : Request, res : Response) => {
	try {
	const { id } = req.params;
	const [movie] = await movieRepository.readMovieById(Number(id));
	if (movie.length > 0) res.json(movie);
	else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
};

export default { getMovies, getOne };