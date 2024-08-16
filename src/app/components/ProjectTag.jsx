import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected 
  ? "border-emerald-500" 
  : "border-gray-500";

  return (
    <button 
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(name)} 
    >
      {name}
    </button>
  );
};

export default ProjectTag;
