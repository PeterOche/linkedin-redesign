// ../data/generatePosts.js
import { faker } from "@faker-js/faker";

export const generatePosts = (num = 10) => {
  return Array.from({ length: num }, () => ({
    _id: faker.string.uuid(),
    userId: faker.string.uuid(), // Reference to the user
    content: faker.lorem.paragraphs(2),
    likes: faker.number.int({ min: 0, max: 1000 }),
    comments: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      () => ({
        commenterId: faker.string.uuid(),
        comment: faker.lorem.sentence(),
        date: faker.date.past().toDateString(),
      })
    ),
    datePosted: faker.date.recent().toDateString(),
  }));
};
