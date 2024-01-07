import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faDocker, faGitAlt, faLinux, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  

    return (
        <>
        <div className='container about-page'>
        <div className='stage-cube-cont2'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faDocker} color="#7FC8F8" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPen} color='#000000' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faLinux} color="#FFBC42" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faAws} color='#000000' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faSquareJs} color="#000000" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#A04203" />
                    </div>
                </div>
            </div>

            <div className='text-zone'>
                <h1>
                   About Me
                </h1>
                <p>
                   
                    Greetings! I'm a dedicated Medical Doctor on a dynamic exploration at the intersection of healthcare and cutting-edge technologies.
                    <br />
                     In the world of Medical Devices, I envision transformative solutions, pushing the boundaries of patient care and healthcare delivery. 
                       </p>
                <p>
                My interests extend to Machine Learning and Scientific Research, where data insights drive innovation in medical knowledge.
                <br />
                      Embracing the future, I explore synergies between Robotics and Health Tech, 
                      <br />
                      envisioning automation that elevates diagnostics and treatment experiences.

                </p>
                <p>
                   <em> When faced with a problem, ask yourself, 'Is it impossible or is it hard?' </em>
                    </p>
                    <br />
                    <br />

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faDocker} color="#7FC8F8" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPen} color='#000000' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faLinux} color="#FFBC42" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faAws} color='#000000' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faSquareJs} color="#000000" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#A04203" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About