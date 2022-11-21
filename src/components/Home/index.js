import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const {letterClass, setLetterClass} = useState('text-animate')
    const nameArray = [' ','M', 'f', 'o', 'n', ',']
    const jobArray = ['a', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                
                <img src={LogoTitle} alt='developer' />

                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15} 
                />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22} 
                />
                </h1>
                <h2>Devops / Technical Writing</h2>
                <a href='mailto:mfonnta05@gmail.com' className='flat-button'>Contact Me</a>
            </div>

            <a href="https://www.hitwebcounter.com" target="_blank">
            <img src="https://hitwebcounter.com/counter/counter.php?page=8071731&style=0007&nbdigits=5&type=page&initCount=0"
            title="Free Counter" Alt="web counter"  
            border="0" /></a> 

        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home