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
            <div className='text-zone'>
                <h1>
                   About Me
                </h1>
                <p>
                    A Software Engineer curious about technology
                </p>
                <p>
                    and enjoying the process of finding solutions to problems.
                </p>
                <p>
                    When faced with a problem, ask yourself, 'Is it impossible or is it hard?'
                    </p>
                    <br />
                    <br />
                    <p>
                    Technical Blog :     
                           <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://mfon.hashnode.dev/"
                    >
                           Click To View
            </a>
        
            </p>
            <p>
                    Github :  
                         <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Mfonn"
                    >
                          Click To View
            </a>
        
            </p>
            <p>
                    linkedin :   
                            <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mfonnta/"
                    >
                         
                           Click To View
            </a>
                </p>
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