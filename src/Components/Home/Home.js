import { Link } from 'react-router-dom'
import './Home.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['T', 'h', 'a', 'n', 'h']
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
    ]

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeOut)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} _0`}>H</span>
                    <span className={`${letterClass} _1`}>i,</span>
                    <br />
                    <span className={`${letterClass} _2`}>I'</span>
                    <span className={`${letterClass} _3`}>m</span>
                    <span className={`${letterClass} _4`}> </span>

                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={10}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={16}
                    />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home
