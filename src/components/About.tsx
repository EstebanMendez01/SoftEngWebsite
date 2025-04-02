import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-code-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono">
          <span className="text-success">def</span> <span className="text-highlight">AboutMe</span> <span className="text-accent">personal</span>
        </h2>
        <div className="bg-primary rounded-lg shadow-code p-6 border border-accent/20">
          <p className="text-code-text">
            {/* Add your about content here */}
            I am a passionate software developer with experience in building web applications and a strong foundation in computer science principles. I am currently working as a Technical Support Specialist & Software Dev at Great Lakes Data Racks & Cabinets. I have always been fascinated by the power of coding and how it can transform ideas into reality. As a software developer, I find joy in solving complex problems and creating applications that enhance people's lives. Software engineering is not just a profession for me; it is a way to connect with others, streamline processes, and make a positive impact on the world. Every line of code I write is a step towards building solutions that can help individuals and communities thrive. 
          </p>
        </div>
      </div>
    </section>
  );
}
