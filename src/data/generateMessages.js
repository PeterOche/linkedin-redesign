// ../data/generateChats.js
import { faker } from "@faker-js/faker";

export const generateMessages = (num = 10) => {
  return Array.from({ length: num }, () => ({
    _id: faker.string.uuid(),
    userId: faker.string.uuid(),
    messages: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      () => ({
        messageId: faker.string.uuid(),
        senderId: faker.string.uuid(),
        message: faker.lorem.sentence(),
        dateSent: faker.date.recent().toDateString(),
      })
    ),
  }));
};
