import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faSass,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiMapbox, SiPowerbi } from 'react-icons/si'
import './index.scss'
// import Carousel from 'react-multi-carousel'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a music lover and songwriter 
            under the name <strong><i>Joey Bonneville</i></strong> (brand name), photography/art enthusiast, and a tenacious-drive 
            focusing in Full Stack development as well as Growth Hacking solutions.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiPowerbi icon={SiPowerbi} color="#F9A600" />
            </div>   
            <div className="face2">
              <SiMapbox icon={SiMapbox} color="#76ABFF" />
            </div>                
            <div className="face3">
              <FontAwesomeIcon icon={faSass} color="#C76496" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>     
          </div>
        </div>
      </div>

      {/* <Carousel /> */}
      
      <Loader type="pacman" />
    </>
  )
}

export default About
