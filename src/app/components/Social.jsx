import React from 'react'
import Link from 'next/link'
import { FiLinkedin, FiGithub} from 'react-icons/fi'

const socials = [
    {
        icon: <FiLinkedin />,
        link: 'https://www.linkedin.com/in/ericeleam'
    },
    {
        icon: <FiGithub />,
        link: 'https://github.com/ericeleam'
    }
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
       {socials.map((social, index) => {
        return (
        <Link key={index} 
        href={social.link} 
        className={iconStyles}>
              {social.icon}
            </Link>
        );
       })}
    </div>
  )
}

export default Social