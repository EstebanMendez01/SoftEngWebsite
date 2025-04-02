import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format');
        }
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
        setProjects([]); // Set empty array as fallback
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-warning">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-16 bg-code-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-code-text font-mono">
          <span className="text-success">const</span> <span className="text-highlight">projects</span> <span className="text-secondary">=</span> <span className="text-accent">getRepositories()</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-primary rounded-lg shadow-code p-6 hover:shadow-lg transition-shadow duration-200 border border-accent/20">
              <h3 className="text-xl font-semibold mb-2 text-code-text">{project.name}</h3>
              <p className="text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.map((topic) => (
                  <span key={topic} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-success font-mono">{project.language}</span>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-highlight font-mono"
                >
                  view.code() →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}