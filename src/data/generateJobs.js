// ../data/generateJobs.js
import { faker } from "@faker-js/faker";

export const generateJobs = (num = 10) => {
  return Array.from({ length: num }, () => ({
    _id: faker.string.uuid(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    location: `${faker.location.city()}, ${faker.location.country()}`,
    description: faker.company.buzzPhrase(),
    datePosted: faker.date.recent().toDateString(),
    salary: faker.finance.amount(30000, 150000, 0, "$"), // Generate random salary
  }));
};
