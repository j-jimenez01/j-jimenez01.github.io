import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import TextSphere from '../TextSphere'
import Loader from 'react-loaders'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => clearTimeout(timeoutId);
  }, []);


return (
    <>
        <div className="container about-page">
        <TextSphere />
        <div className="text-zone">
          <h1>
          
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'e', 's', 'u', 'm', 'e ',]}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          
          </div>

          
          
          </div>


          <Loader type="pacman" />
    </>
)
}
export default Resume
