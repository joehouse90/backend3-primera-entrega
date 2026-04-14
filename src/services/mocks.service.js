import { generateMockUsers } from "../mocks/user.mock.js";
import { generateMockPets } from "../mocks/pet.mock.js";
import { UserModel } from "../models/User.js";
import { PetModel } from "../models/Pet.js";

export const getMockUsersService = (quantity = 50) => {
  return generateMockUsers(quantity);
};

export const getMockPetsService = (quantity = 20) => {
  return generateMockPets(quantity);
};

export const generateAndInsertDataService = async (usersQty, petsQty) => {
  const mockUsers = generateMockUsers(usersQty);
  const mockPets = generateMockPets(petsQty);

  const insertedUsers = await UserModel.insertMany(mockUsers);
  const insertedPets = await PetModel.insertMany(mockPets);

  return {
    insertedUsers: insertedUsers.length,
    insertedPets: insertedPets.length,
  };
};