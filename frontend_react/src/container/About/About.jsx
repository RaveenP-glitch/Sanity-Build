import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const abouts =[
  {title: 'Web Development',
    description: 'I am a good Web Developer.',
    imgUrl: ''  
  },
  {title: 'Web Design',
    description: 'I am a good Web Developer.',
    imgUrl: ''  
  },
  {title: 'UI/UX',
    description: 'I am a good Web Developer.',
    imgUrl: ''  
  },
  {title: 'Web Animations',
    description: 'I am a good Web Developer.',
    imgUrl: ''  
  }
]


const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know That
        <span>Good Design</span>
        <br/>
        means
        <span>Good Business</span>
       </h2>

       <div className='app__profiles'>
        {abouts.map((about,index)=> (
          <motion.div
            whileInView={{ opacity:1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >


          </motion.div>
        ))}

       </div>
    </>
  )
}

export default About