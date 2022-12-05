import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
   

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi,
                <br />
               I'm Mfon
                
                <img src={LogoTitle} alt='developer' />

               
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