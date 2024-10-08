// ../data/generatePosts.js
import { faker } from "@faker-js/faker";

export const generatePosts = (num = 10) => {
  return Array.from({ length: num }, () => ({
    _id: faker.string.uuid(),
    userId: faker.string.uuid(), // Reference to the user
    content: faker.lorem.paragraphs(2),
    trending: faker.number.int({ min: 1, max: 10 }),
    likes: faker.number.int({ min: 0, max: 100 }),
    comments: faker.number.int({ min: 0, max: 50 }),
    datePosted: faker.date.recent().toDateString(),
    interactions: {
      likedBy: Array.from(
        { length: faker.number.int({ min: 1, max: 3 }) },
        () => faker.name.fullName()
      ), // Names of people who liked the post
    },
    attachments:
      Math.random() > 0.7
        ? [
            {
              title: "iOS 11 guidelines for UX/UI designers",
              fileType: "PDF",
              fileSize: "324kb",
              url: faker.internet.url(),
            },
            {
              title: "iOS 11 guidelines for developers",
              fileType: "PDF",
              fileSize: "245kb",
              url: faker.internet.url(),
            },
          ]
        : [], // 30% chance to have attachments
  }));
};
