import { useEffect, useState } from 'react';

// custom hook, which can be used multiple times for various purposes
export const useProjectVariant = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/projects.json');
      const result = await response.json();
      setProjects(result);
    };
    fetchData();
  }, []);

  // returns array of projects
  return projects;
};
