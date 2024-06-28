// import { useState } from "react";
import { Header } from "./components/Header.tsx";
import { School } from "./components/School.tsx";
import { Experience } from "./components/Experience.tsx";

export interface Job {
  company: string;
  position: string;
  description: string[];
}
function App() {
  const jobs: Job[] = [
    {
      company: "Excellus BCBS",
      position: "Data Science Intern",
      description: [
        "Hosted an app with an Angular frontend and ML pipeline making decisions in prior authorization process with 70% accuracy",
      ],
    },
    {
      company: "URMC",
      position: "ML Research Intern",
      description: ["Solved cancer", "Made ML tools"],
    },
  ];

  return (
    <>
      <Header />
      <School />
      <Experience jobs={jobs} />
    </>
  );
}

export default App;
