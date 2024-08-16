"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>Python</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Temple University, Philadelphia, PA</li>
                <li>Graduation Date: Spring 2026</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>Trader Joe&apos;s Crew Member: March 2024 - Present</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="py-16">
            <div className="text-center mb-10">
                <h1 className='font-bold text-6xl mt-20 mb-10'>
                    About me
                </h1>
            </div>
            <div className="text-center mb-16">
                <p className='text-3xl'>
                    Hi! I&apos;m Eric, a dynamic and engaged student thriving at Temple University.
                    I find interest in integrating code to solve the world&apos;s challenges,
                    and my pursuit of a Computer Science degree enables me to live with purpose.
                    I spend time playing soccer and chess, aspiring to constantly improve in both.
                    I hope to connect with you in building my community. Follow the link below to join my network!
                </p>
            </div>
            <div className="text-center">
                <div className='flex justify-center space-x-4 mb-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                        Experience
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
