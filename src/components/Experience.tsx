import { useState, useEffect } from 'react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Example Corp',
      location: 'Remote',
      startDate: '2022-01',
      endDate: 'Present',
      description: [
        'Led development of microservices architecture',
        'Implemented CI/CD pipelines',
        'Reduced system latency by 40%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS']
    }
  ]);

  return (
    <section id="experience" className="py-16 bg-code-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono">
          <span className="text-success">class</span> <span className="text-highlight">WorkExperience</span> <span className="text-accent">extends Career</span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-primary rounded-lg shadow-code p-6 border border-accent/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-code-text">
                    <span className="text-success">this</span>.<span className="text-highlight">{exp.title}</span>
                  </h3>
                  <p className="text-secondary">
                    <span className="text-accent">{exp.company}</span> • {exp.location}
                  </p>
                </div>
                <p className="text-sm text-secondary font-mono">
                  {exp.startDate} → {exp.endDate}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-secondary mb-4">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-code-text">
                    <span className="text-success">→</span> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}