"use client"

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/hooks/useSectionInView';
import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            id="skills"
        >
            <SectionHeading>Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
            {
                skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        key={index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
            </ul>
        </motion.section>
    )
}
