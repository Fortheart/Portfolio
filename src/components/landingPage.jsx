import React from 'react';

import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';

import styles from '../styles/landingPage.module.css';
import githubLogo from '../img/github.png';
import linkedInLogo from '../img/linkedin.png';



const main = (props) => {

    return (

        <div>
            {props.english ?
                <div className={styles.particlesContainer}>
                    <Particles />
                    <div className={styles.particlesTextContainer}>
                        <div className={styles.particlesTextHeadline}>
                            <h1>I am
                     <span className={styles.selfWritingText}>
                                    <Typewriter className={styles.typeWriter}
                                        options={{
                                            strings: ['Front End Developer', 'Web Designer', 'Coder'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                        </div>
                        <div className={styles.particlesTextContainerP}>
                            <p>
                                Hello my name is Martin, Front End web developer based in Prague.
                                Currently focused on React.js web development.

                    </p>

                        </div>
                        <div className={styles.particlesTextContainerImg}>
                            <a href="https://github.com/Fortheart" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub"></img></a>
                            <a href="https://www.linkedin.com/in/martin-zvozil-0758941b3/" target="_blank" rel="noopener noreferrer"><img src={linkedInLogo} alt="LinkedIn"></img></a>
                        </div>

                    </div>
                    <p className={styles.scroller}>Scroll Down</p>
                </div>
                :
                /*CZ*/
                <div className={styles.particlesContainer}>
                    <Particles />
                    <div className={styles.particlesTextContainer}>
                        <div className={styles.particlesTextHeadline}>
                            <h1>I am
                     <span className={styles.selfWritingText}>
                                    <Typewriter className={styles.typeWriter}
                                        options={{
                                            strings: ['Front End Developer', 'Web Designer', 'Coder'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                        </div>
                        <div className={styles.particlesTextContainerP}>
                            <p>
                                Jmenuji se Martin, Front End developer žíjící v Praze.
                    </p>

                        </div>
                        <div className={styles.particlesTextContainerImg}>
                            <a href="https://github.com/Fortheart" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub"></img></a>
                            <a href="https://www.linkedin.com/in/martin-zvozil-0758941b3/" target="_blank" rel="noopener noreferrer"><img src={linkedInLogo} alt="LinkedIn"></img></a>
                        </div>

                    </div>
                    <p className={styles.scroller}>Sjeďte dolů</p>
                </div>

            }
        </div>


    )
}

export default main
