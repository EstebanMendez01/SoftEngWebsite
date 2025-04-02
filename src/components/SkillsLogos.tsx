import React from 'react';
import './SkillsLogos.css'; // Import the CSS file

const SkillsLogos: React.FC = () => {
  return (
    <section className="py-16 bg-dark text-light flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
      <div className="wheel-3d-container">
        <div className="wheel-3d">
          <img src="https://cdn.simpleicons.org/html5" alt="HTML5" className="logo" />
          <img src="https://cdn.simpleicons.org/css3" alt="CSS3" className="logo" />
          <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="logo" />
          <img src="https://cdn.simpleicons.org/react" alt="React" className="logo" />
          <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" className="logo" />
          <img src="https://cdn.simpleicons.org/python" alt="Python" className="logo" />
          <img src="https://cdn.simpleicons.org/postgresql" alt="PostgreSQL" className="logo" />
          <img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" className="logo" />
          <img src="https://cdn.simpleicons.org/docker" alt="Docker" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default SkillsLogos; 