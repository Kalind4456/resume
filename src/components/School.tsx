export const School = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h1 className="text-3xl font-bold mb-2">University of Rochester</h1>

      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-lg italic font-bold">BS, Computer Science</h2>

        <div className="flex items-baseline">
          <h3 className="text-lg italic font-bold">GPA: </h3>
          <h3 className="inline ml-2">3.5</h3>
        </div>

        <div className="flex items-baseline">
          <h3 className="text-lg italic font-bold">Awards: </h3>
          <h3 className="inline ml-2">Dean's List, Miller Family Scholar</h3>
        </div>
      </div>
    </div>
  );
};
