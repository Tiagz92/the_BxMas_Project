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

router.get("/movies", movieAction.getMovies);

router.get("/movies/:id", movieAction.getOne);
/* ************************************************************************* */

export default router;