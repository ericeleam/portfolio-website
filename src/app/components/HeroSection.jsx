"use client";
import StaggerText from 'react-stagger-text';
import React from 'react'

const HeroSection = () => {
  return (
    <section>
      <center>
    <h1 className="mb-4 text-6xl font-bold p-5 px-5">
      <StaggerText
      staggerType='letter'
      staggerDuration={.5}>
        Welcome to my portfolio!
      </StaggerText>
    </h1>
        <p className="px-5 text-5xl leading-relaxed">
        Thank you for taking the time to visit my site! 
        I created this space to share more about myself with you. 
        I hope as you explore, you find inspiration to reach out via email. 
        Looking forward to connecting with you!
            </p>
          </center>
    </section>
  )
}

export default HeroSection