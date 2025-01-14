import type { Request, Response, NextFunction } from 'express';
import e from 'express';

const validateMovie = (req : Request, res : Response, next : NextFunction) => {
	const movie = req.body;
	
	if (movie.title.length < 3 || typeof movie.title !== "string") res.sendStatus(400); 
		else next();
	}


	export default { validateMovie };