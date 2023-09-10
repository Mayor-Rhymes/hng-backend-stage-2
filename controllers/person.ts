import { Context } from "hono";
import Person from "../models/person";

//GET REQUEST
//ALSO USES A name PARAMETER FOR FILTERING
const get = async (c: Context) => {
  const name = c.req.query("name");

  if (!name) {
    const persons = await Person.find();

    if (!persons) return c.json({ message: "Not Found" }, 404);
    else if (persons.length === 0)
      return c.json(
        { message: "The dataset exists but there are no persons." },
        200
      );
    else return c.json({ persons }, 200);
  }

  const person = await Person.findOne({ name: name });

  if (!person) return c.json({ message: "No result" }, 404);

  return c.json(person, 200);
};

//GET WITH ID PARAMETER REQUEST
const getOne = async (c: Context) => {
  const id = c.req.param("id");

  const person = await Person.findById(id);

  if (!person)
    return c.json({ message: `Person with id ${id} not found` }, 404);

  return c.json(person, 200);
};

//POST REQUEST
//ALSO USES A name PARAMETER FOR CREATION OF NEW Person data
const addPerson = async (c: Context) => {
  const name = c.req.query("name");

  if (!name) {
    const { name } = await c.req.json();
    const person = await Person.create({ name });

    if (!person) return c.json({ message: "Unable to create person" }, 409);

    return c.json(
      { message: `Person with name ${name} created successfully`, person },
      201
    );
  }

  const person = await Person.create({ name });

  if (!person) return c.json({ message: "Unable to create person" }, 409);

  return c.json(
    { message: `Person with name ${name} created successfully`, person },
    201
  );
};

//DELETE REQUEST
const deletePerson = async (c: Context) => {
  const name = c.req.query("name");

  const person = await Person.findOneAndDelete({ name: name });

  if (!person)
    return c.json(
      {
        message: `Unable to delete person. This person with name ${name} probably does not exist`,
      },
      404
    );

  return c.json({ message: `Person with name ${name} has been deleted` });
};

//DELETE BY ID REQUEST
const deleteById = async (c: Context) => {
  const id = c.req.param("id");

  const person = await Person.findByIdAndDelete(id);

  if (!person)
    return c.json(
      {
        message: `Unable to delete person. This person with id ${id} probably does not exist`,
      },
      404
    );

  return c.json({ message: `Person with id ${id} has been deleted` });
};

//PUT REQUEST
const updatePerson = async (c: Context) => {
  const name = c.req.query("name");

  const { newName } = await c.req.json();

  const person = await Person.findOneAndUpdate(
    { name: name },
    { name: newName },
    { new: true }
  );

  if (!person)
    return c.json({ message: `Person with ${name} does not exist` }, 404);

  return c.json(
    {
      message: `Person with ${name} has been updated to new name: ${newName}`,
      person,
    },
    200
  );
};

//PUT REQUEST USING THE ID PARAMETER
const updateById = async (c: Context) => {
  const id = c.req.param("id");

  const { name } = await c.req.json();

  const personExists = await Person.findById(id);

  if (!personExists)
    return c.json({ message: `Person with id ${id} doesn't exist` });

  const person = await Person.findByIdAndUpdate(
    id,
    { name: name },
    { new: true }
  );

  if (!person)
    return c.json({ message: `Person with ${name} does not exist` }, 404);

  return c.json(
    {
      message: `Person with ${personExists.name} has been updated to new name: ${name}`,
      person,
    },
    200
  );
};

const personController = {
  get,
  getOne,
  addPerson,
  deletePerson,
  deleteById,
  updatePerson,
  updateById,
};

export default personController;
