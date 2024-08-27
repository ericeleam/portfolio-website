'use client'
import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import Social from './Social'

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center py-40">
      <h2 className="font-bold text-6xl mb-10">Contact Me</h2>
      <div className='flex flex-row items-center gap-8 mt-10'>
        <a href="/Resume.pdf" download>
          <Button variant="outline">
            <span className="mr-2">Download Resume</span>
            <FiDownload className='text-xl' />
          </Button>
        </a>
        <div>
          <Social 
            containerStyles="flex gap-6" 
            iconStyles="w-20 h-20 border border-accent rounded-full
            flex justify-center items-center text-accent text-base
            hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactMe
