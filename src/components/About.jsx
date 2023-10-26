import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img 
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi there! I am a Computer Science major and Communications minor with a passion for bridging the gap between technology and people.

        With 5 years of experience in software development, I have honed my skills in areas such as java and python, and I am always looking for ways to stay up-to-date with the latest advancements in technology. Additionally, my experience in communications has allowed me to excel in interpersonal business relationships, which has proven to be an asset in my work as a tech professional.

        I believe that the key to success in any field is communication and collaboration, and I take pride in my ability to work effectively with teams and stakeholders. I am a strategic thinker who is able to balance big-picture goals with the details necessary to achieve them. Additionally, I am a creative problem-solver who is not afraid to take risks and try new approaches.

        Overall, I am a versatile and innovative professional who is passionate about using technology to create meaningful change. I am always open to new opportunities to learn and grow, and I am excited to see what the future holds in the world of tech and communications.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")