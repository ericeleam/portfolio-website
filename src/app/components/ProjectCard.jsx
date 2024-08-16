import React from 'react'
import Link from "next/link";

const ProjectCard = ({ imgURL, title, description}) => {
  return (
    <div>
        <div 
        className="h-52 rounded-t-xl bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${imgURL})` }}>
        </div>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 duration-500'>
                <Link 
                href= "/" 
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-stone-500">
                
                </Link>
            </div>
        <div className='rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2 text-white'>
                {title}</h5>
            <p className='text-white'>
                {description}</p>
        </div>
    </div>
  );
};

export default ProjectCard;