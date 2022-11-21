import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faDocker, faGitAlt, faLinux, faSquareJs, faHashnode } from '@fortawesome/free-brands-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

const {letterClass, setLetterClass} = useState('text-animate')

useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am an ambitious Software Developer looking for an 
                    opportunity to work with challenging and diverse projects.
                </p>
                <p>
                    I am naturally curious, I have strong problem-solving skills,
                    Empathetic with great time management skills.
                </p>
                <p>
                    I enjoy writing, talking and socializing with others. 
                    <br/>
                    My Technical Blog hosted on Hashnode:   
                    <br />
                           <p> <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://mfon.hashnode.dev/"
                    >
                        <FontAwesomeIcon icon={faHashnode} color="blue" />
                        Click To View
            </a>
            </p>
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