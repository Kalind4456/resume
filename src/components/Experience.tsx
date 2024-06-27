import { Job } from "../App.jsx";

interface ExperienceProps {
  jobs: Job[];
}
export const Experience: React.FC<ExperienceProps> = ({ jobs: jobs }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mt-2"
        >
          <h1 className="text-3xl font-bold mb-2">{job.company}</h1>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-lg italic font-bold">{job.position}</h2>
            {job.description.map((desc, index) => (
              <div className="flex items-baseline">
                {/* <h3 className="text-lg italic font-bold"></h3> */}
                <h3 key={index} className="inline ml-2">
                  {desc}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
