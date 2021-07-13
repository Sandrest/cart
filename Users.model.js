import * as fs from "fs/promises";
const USERS_FILE = "./data/Users.json";

export async function getAll() {
  try {
    let usersTxt = await fs.readFile(USERS_FILE);
    let users = JSON.parse(usersTxt);
    return users;
  } catch (err) {
    if (err) {
      await save([]);
      return []; 
    }
  }
}


export async function addCart(id) {
  let users = await getAll();

  if (users) {
    const filteredUsers = users.filter((user) => user.UserId === id);
    let cart = { c: [] };
    let filteredUser = filteredUsers[0];
    filteredUser["cart"] = cart;
    if (users.includes(filteredUser)) {
      const usersJson = JSON.stringify(users);
      await fs.writeFile(USERS_FILE, usersJson);
    }
  }
}

