// ../data/generateUsers.js
import { faker } from "@faker-js/faker";

export const generateUsers = (num = 10) => {
  const aboutTexts = [
    "I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership.",
    "A creative thinker who excels at designing innovative solutions, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "An experienced software engineer with a focus on clean, efficient code, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "A results-driven individual with a background in marketing and sales, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "An enthusiastic learner with a passion for technology and collaboration, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "A detail-oriented designer who creates seamless user experiences, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "A forward-thinking entrepreneur with experience in scaling businesses, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "A data-driven analyst with a strong foundation in statistics and algorithms, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
    "A customer-focused leader with a talent for building strong teams, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    "A dedicated professional with expertise in project management and leadership",
  ];

  const skills = [
    "User experience (UX)",
    "User interface (UI)",
    "Brand identity",
    "Mobile Developement",
    "Frontend Dev",
    "Nature Photography",
  ];

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
      projects: Array.from({ length: 12 }, () => ({
        title: faker.commerce.productName(),
        description: faker.hacker.adjective(),
        date: faker.date.past().toDateString(),
        image: `https://picsum.photos/300/200?random=${faker.number.int({
          min: 1,
          max: 1000,
        })}`,
      })),
      education: {
        school: faker.company.name(),
        degree: faker.person.jobType(),
        dates: `${faker.date.past(10).getFullYear()} - ${faker.date
          .recent(1)
          .getFullYear()}`,
      },
      skills: Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        () => ({
          skill: faker.helpers.arrayElement(skills), // Random skill name
          endorsementsCount: faker.number.int({ min: 3, max: 10 }), // Random number of endorsements
          // Random number of endorsers for each skill (between 1 and 12 endorsers)
          endorsedBy: Array.from(
            { length: faker.number.int({ min: 1, max: 12 }) },
            () => ({
              name: `${faker.person.firstName()} ${faker.person.lastName()}`, // Endorser's name
              profileImage: `https://randomuser.me/api/portraits/thumb/${faker.helpers.arrayElement(
                ["men", "women"]
              )}/${faker.number.int({ min: 1, max: 99 })}.jpg`,
            })
          ),
        })
      ),
      email,
      about: faker.helpers.arrayElement(aboutTexts),
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
