import { Router } from "express";

import Debugger from "debug";

const debugGenre = Debugger("genre");

debugGenre("Genre route")
const genre = Router();

/* get all genres */
genre.get("/", async (req, res) => { });

/* get individual genre */
genre.get("/:id", () => { });

/* create a genre */
genre.post("/", () => { })

/* edit a genre */
genre.put("/:id", () => { })

/* remove genre from list */
genre.delete("/:id", () => { });

export default genre;