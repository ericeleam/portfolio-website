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
            Thank you for joining me today. 
            I coded this site for a chance for you to learn more about me.
            I hope you read more below,
            and it inspires you to send me an email!
            </p>
          </center>
    </section>
  )
}

export default HeroSection