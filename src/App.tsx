// import { useState } from "react";
import { Header } from "./components/Header.tsx";
import { School } from "./components/School.tsx";
import { Experience } from "./components/Experience.tsx";

export interface Job {
  company: String;
  position: String;
}
function App() {
  const jobs: Job[] = [
    { company: "Excellus BCBS", position: "Data Science Intern" },
    { company: "URMC", position: "ML Research Intern" },
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
