import { Hono } from "hono";
import personController from "../controllers/person";
export const person = new Hono();

const { get, getOne, addPerson, deletePerson, deleteById, updatePerson, updateById } = personController;


person.get("/", get);

person.get("/:id", getOne);

person.post("/", addPerson);

person.delete("/", deletePerson);

person.delete("/:id", deleteById);

person.put("/", updatePerson);

person.put("/:id", updateById);
