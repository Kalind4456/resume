import { Job } from "../App.jsx";

interface ExperienceProps {
  jobs: Job[];
}
export const Experience: React.FC<ExperienceProps> = ({ jobs: jobs }) => {
  return (
    <div>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.company}</li>
        ))}
      </ul>
    </div>
  );
};
