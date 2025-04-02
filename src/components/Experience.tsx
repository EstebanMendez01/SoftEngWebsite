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
      id: '8',
      title: 'Technical Support Specialist & Software Dev',
      company: 'Great Lakes Data Racks & Cabinets',
      location: 'Edinboro, Pennsylvania, United States',
      startDate: '2024-08',
      endDate: 'Present',
      description: [
        'Responsible for supporting datacom cabinets, ensuring their optimal performance.',
        'Addressing issues related to hardware, power, network connectivity, and physical access control.',
        'Assisting customers with software integration of intelligent components.',
        'Collaborating across departments to drive process improvements within the company.'
      ],
      technologies: [
        'Databases',
        'Datacom',
        'Network Administration',
        'Physical Security',
        'Software Support',
        'SQL',
        'Software Development',
        'Artificial Intelligence (AI)',
        'API Development',
        'JavaScript',
        'Mobile Applications',
        'Web Applications'
      ]
    },
    {
      id: '2',
      title: 'IT Technician',
      company: 'Allegheny College',
      location: 'Meadville, Pennsylvania, United States',
      startDate: '2024-01',
      endDate: '2024-05',
      description: [
        'Specializing in resolving technical issues for students and staff.',
        'Ensured a smooth and efficient technology experience on campus.'
      ],
      technologies: ['Software Support', 'Engineering']
    },
    {
      id: '3',
      title: 'Technical Leader',
      company: 'Allegheny College',
      location: 'Meadville, Pennsylvania, United States',
      startDate: '2023-08',
      endDate: '2024-05',
      description: [
        'Mentored 30-40 computer science students through advanced courses.',
        'Partnered with faculty to enrich academic programs and streamline course arrangements.'
      ],
      technologies: ['Algorithms', 'pytest']
    },
    {
      id: '4',
      title: 'IA Assistant',
      company: 'Allegheny College',
      location: 'Meadville, Pennsylvania, United States',
      startDate: '2023-08',
      endDate: '2023-12',
      description: [
        'IA Assistant for the Alumni Center at Allegheny College.'
      ],
      technologies: ['Organization Skills', 'Microsoft Word']
    },
    {
      id: '5',
      title: 'Database Architecture and Data Analyst',
      company: 'The Buildable Group',
      location: 'Raleigh, North Carolina, United States',
      startDate: '2023-05',
      endDate: '2023-08',
      description: [
        'Reviewed and improved the database architecture.',
        'Maintained workflow and managed databases.'
      ],
      technologies: ['Smartsheet', 'HTML']
    },
    {
      id: '6',
      title: 'IA Assistant',
      company: 'Allegheny College',
      location: 'United States',
      startDate: '2021-08',
      endDate: '2023-05',
      description: [
        'IA Assistant for the Alumni Center at Allegheny College.'
      ],
      technologies: ['Microsoft Word', 'Gmail']
    },
    {
      id: '7',
      title: 'Technical Assistant (Spanish)',
      company: 'Allegheny College',
      location: 'Meadville, Pennsylvania, United States',
      startDate: '2020-08',
      endDate: '2021-05',
      description: [
        'Technical Assistant and tutor for Spanish.'
      ],
      technologies: []
    },
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