import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import movieAction from "./modules/movie/movieActions"
import movieServices from "./modules/movie/movieServices"

router.get("/movies",movieServices.validateMovie, movieAction.getMovies);

router.get("/movies/:id", movieAction.getOne);

router.post("/movies", movieAction.postMovie);

router.put("/movies/:id", movieAction.editMovie);

router.delete("/movies/:id", movieAction.destroyMovie);
/* ************************************************************************* */

export default router;