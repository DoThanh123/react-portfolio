import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeOut)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={30}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a
                        role in an established IT company with the opportunity
                        to work with the latest technologies on challenging and
                        diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet confident, naturally curious, and perpetually
                        working on improving my chops one design problem at a
                        time.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#efd81d"
                            />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
