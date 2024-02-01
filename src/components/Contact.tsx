"use client"

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/hooks/useSectionInView';
import { BsLinkedin } from 'react-icons/bs';
import { FaCoffee, FaGithubSquare, FaTwitter } from 'react-icons/fa';
import SubmitBtn from './SubmitButton';
import { sendEmail } from '@/actions/send-email';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return (
        <motion.section
            ref={ref}
            className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28 scroll-mt-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="contact"
        >
            <SectionHeading>Contact Me</SectionHeading>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mb-5">
                <a
                    className="bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/ktalkington"
                    target="_blank"
                >
                <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-slate-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/kajecode"
                    target="_blank"
                >
                <FaGithubSquare />
                </a>
                <a
                    className="bg-white p-4 text-slate-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://twitter.com/maybekbtalkin"
                >
                <FaTwitter />
                </a>
                <a
                    className="bg-white p-4 text-slate-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.buymeacoffee.com/kbtalkin"
                >
                <FaCoffee />
                </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mb-5">
                <a href="https://www.buymeacoffee.com/kbtalkin" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=kbtalkin&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a>
            </div>
            <p className="text-slate-700 dark:text-white/80">
                If you'd like to get in touch with me, use the form below. Alternatively, you can use the methods above or email me at{" "}
                <a
                    className="text-sky-500 underline"
                    href="mailto:netcool.dude@example.com"
                >
                    netcool.dude@example.com
                </a>                
            </p>
            <form 
                className="mt-5 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    
                    if (error) {
                        toast.error(error.message, { duration: 100 });
                        return;
                    }
            
                    toast.success("Email sent successfully!");
                    console.log(data)
                }}
            >
                <input 
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderName"
                    type="name"
                    required
                    maxLength={500}
                    placeholder="Name" 
                />
                <input 
                    className="h-14 px-4 mt-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Email" 
                />
                <textarea 
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
            
        </motion.section>
    )
}
