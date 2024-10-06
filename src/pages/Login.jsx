import React, { useContext } from "react";
import { generateUsers } from "../data/generateUsers";
import { generatePosts } from "../data/generatePosts";
import { generateJobs } from "../data/generateJobs";
import AppContext from "../AppState";

// console.log(generateUsers());
const item = generateUsers();
// console.log(generatePosts());
console.log(generateJobs());

const Login = () => {
  const { state } = useContext(AppContext);
  const user = state.users[0];

  return (
    <div>
      <img src={user.profileImage} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.occupation}</p>
      <p>{user.location}</p>
      <h3>Projects</h3>
      {user.projects.map((project, index) => (
        <div key={index}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <span>{project.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Login;
