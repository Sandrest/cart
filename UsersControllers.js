import { getAll, addCart } from "./Users.model.js";

export async function getAllUsers(req, res) {
  try {
    let allUsers = await getAll();
    res.json({ allUsers });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function createUserCart(req, res) {
  const user = parseInt(req.params.id);
  try {
    await addCart(user);
    res.json({ a:v });
  } catch (error) {
    res.status(400).send(error.message);
  }
}