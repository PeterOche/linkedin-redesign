// ../data/generatePosts.js
import { faker } from "@faker-js/faker";

export const generatePosts = (num = 10) => {
  return Array.from({ length: num }, () => {
    // Generate mock user data
    const user = {
      _id: faker.string.uuid(),
      name: faker.name.fullName(),
      profileImage: `https://randomuser.me/api/portraits/men/${faker.number.int(
        { min: 1, max: 99 }
      )}.jpg`,
      occupation: faker.name.jobTitle(),
    };

    return {
      _id: faker.string.uuid(),
      userId: user._id, // Keeping the userId for reference
      user: {
        name: user.name,
        profileImage: user.profileImage,
        occupation: user.occupation,
      }, // Include user data in the post
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
      image:
        Math.random() > 0.5
          ? `https://picsum.photos/300/200?random=${faker.number.int({
              min: 1,
              max: 1000,
            })}`
          : null,
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
    };
  });
};
