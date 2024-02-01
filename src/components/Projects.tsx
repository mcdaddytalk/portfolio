"use client"

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/hooks/useSectionInView'

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center justify-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="projects"
        >
            <SectionHeading>Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project) => (
                        <React.Fragment key={project.title}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </motion.section>
    )
}
