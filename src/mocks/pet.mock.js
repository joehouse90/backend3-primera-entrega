import { faker } from "@faker-js/faker";

export const generateMockPet = () => {
  return {
    name: faker.animal.petName(),
    specie: faker.helpers.arrayElement(["dog", "cat", "bird", "rabbit"]),
    birthDate: faker.date.past({ years: 10 }),
    adopted: false,
    image: faker.image.urlLoremFlickr({ category: "animals" }),
  };
};

export const generateMockPets = (quantity = 20) => {
  const pets = [];

  for (let i = 0; i < quantity; i++) {
    pets.push(generateMockPet());
  }

  return pets;
};