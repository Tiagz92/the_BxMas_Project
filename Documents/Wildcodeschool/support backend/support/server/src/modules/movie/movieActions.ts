import type { Request, Response } from "express";
import movieRepository from "./movieRepository";

interface Movie {
	id: number,
	title: string
}

const getMovies =async (req : Request, res : Response) => {
	try {
	const [movies] = await movieRepository.readMovies();
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

const postMovie = async (req : Request, res : Response) => {
	try {
	const movie = req.body;
	const [result] = await movieRepository.createMovie(movie);
	if (result.affectedRows > 0) res.sendStatus(201);
	else res.sendStatus(400);
	}catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
};

const editMovie = async (req : Request, res : Response) => {
	try {
	const { id } = req.params;
	const movie = req.body;	
	const [result] = await movieRepository.updateMovie(movie, Number(id));
	if (result.affectedRows > 0) res.sendStatus(200);
	else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

const destroyMovie = async (req : Request, res : Response) => {
	try {
	const { id } = req.params;
	const [result] = await movieRepository.deleteMovie(Number(id));
	if (result.affectedRows > 0) res.sendStatus(204);
	else res.sendStatus(404);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

export default { getMovies, getOne, postMovie, editMovie, destroyMovie };