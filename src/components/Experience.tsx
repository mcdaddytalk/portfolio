"use client"

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { ExperienceProps } from '@/lib/types';
import { useTheme } from '@/context/themeContext';

export default function ExperienceNode() {
    const { ref, inView } = useSectionInView("Experience", 0.25);
    const { theme } = useTheme();
    
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center justify-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="experience"
        >
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
            {
                experiencesData.map((item) => (
                    <React.Fragment key={item.index}>
                        <ExperienceCard theme={theme} inView={inView} key={item.index} experience={item} />
                    </React.Fragment>
                ))
            }
            </VerticalTimeline>
        </motion.section>
    )
}

const ExperienceCard = ({ theme, inView, experience }: Readonly<ExperienceProps>) => {
    return (
        <VerticalTimelineElement
            visible={inView}
            contentStyle={{
                background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
                borderRight:
                    theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
                background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
            }}
        >
            <h3 className="font-semibold capitalize">{experience.title}</h3>
            <p className="font-normal !mt-0">{experience.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
            </p>
        </VerticalTimelineElement>
    )
}
