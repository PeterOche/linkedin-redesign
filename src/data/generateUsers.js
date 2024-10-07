// ../data/generateUsers.js
import { faker } from "@faker-js/faker";

export const generateUsers = (num = 10) => {
  return Array.from({ length: num }, () => {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });

    return {
      _id: faker.string.uuid(),
      name: `${firstName} ${lastName}`,
      profileImage: `https://randomuser.me/api/portraits/men/${faker.number.int(
        { min: 1, max: 99 }
      )}.jpg`,
      occupation: {
        title: faker.person.jobTitle(),
        description: faker.lorem.paragraph(2),
      },
      headline: faker.company.catchPhrase(),
      location: `${faker.location.city()}, ${faker.location.country()}`,
      connections: faker.number.int({ min: 50, max: 500 }),
      projects: Array.from({ length: 3 }, () => ({
        title: faker.commerce.productName(), // Updated to commerce product name
        description: faker.lorem.sentences(2),
        date: faker.date.past().toDateString(),
      })),
      education: {
        school: faker.company.name(),
        degree: faker.person.jobType(),
        dates: `${faker.date.past(10).getFullYear()} - ${faker.date
          .recent(1)
          .getFullYear()}`,
      },
      skills: [
        faker.hacker.verb(),
        faker.hacker.adjective(),
        faker.hacker.noun(),
      ],
      email,
      sex,
      birthday: faker.date.birthdate(),
      subscriptionTier: faker.helpers.arrayElement([
        "free",
        "basic",
        "business",
      ]),
    };
  });
};
