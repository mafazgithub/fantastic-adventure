import React, { useEffect, useState } from 'react';

const ProblemsList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Implement the logic to fetch coding problems from the server
    // You can use the 'fetch' API or a library like 'axios' for this purpose
    const fetchProblems = async () => {
      try {
        const response = await fetch('http://localhost:3001/problems');
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      <h2>Coding Problems</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            <strong>{problem.title}</strong> - {problem.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemsList;
