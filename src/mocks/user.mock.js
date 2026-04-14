import { faker } from "@faker-js/faker";
import { createHash } from "../utils/hash.js";
 
const password = createHash("coder123");
 
export const generateMockUser = () => ({
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: Math.random() > 0.5 ? "user" : "admin",
  pets: [],
});
 
export const generateMockUsers = (quantity = 50) =>
  Array.from({ length: quantity }, generateMockUser);