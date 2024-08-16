'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Hand-coded website that showcases my coding projects",
    image: "/images/portfolioWebsite.png",
    tag: ["All", "Personal"],
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag) || tag === "All"
  );

  return (
    <>
      <center>
        <h2 className='font-bold text-6xl p-10'>
          My Projects
        </h2>
        <div className='flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag 
            onClick={() => handleTagChange("All")} 
            name="All" 
            isSelected={tag === 'All'} 
          />
          <ProjectTag 
            onClick={() => handleTagChange("Personal")} 
            name="Personal" 
            isSelected={tag === 'Personal'} 
          />
          <ProjectTag 
            onClick={() => handleTagChange("School")} 
            name="School" 
            isSelected={tag === 'School'} 
          />
        </div>
      </center>
      <div className='grid grid-cols-3 gap-8'>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgURL={project.image} 
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
