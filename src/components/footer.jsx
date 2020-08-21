import React from 'react'
import styles from '../styles/footer.module.css';
import expBar from '../img/expBar.png';
import resume from '../resume.pdf';

const footer = (props) => {
    return (
        <div>
            {props.english ?
                <div className={styles.main}>

                    <h1>About</h1>
                    <div className={styles.container} id="about">
                        <div className={styles.skills}>
                            <h2>Development Skills</h2>
                            <p>HTML, CSS, React.js, JavaScript, WordPress</p>

                            <h2>Graphical Skills</h2>
                            <p>Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma</p>

                            <h2>Contact</h2>
                            <p>E-mail: martin.zvozil@gmail.com</p>
                            <p>Phone: +420 725 054 299</p>
                            <br />
                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>

                        <div className={styles.experienceContainer}>
                            <h2>Work Experience</h2>
                            <div className={styles.experience}>
                                <img src={expBar} alt="experience bar"></img>
                                <div className={styles.expData}>
                                    <h2>Freelancing</h2>
                                    <p>2020</p>

                                    <h2>Testing</h2>
                                    <p>Passengera - 2019 - 2020</p>

                                    <h2>Testing, Graphic design</h2>
                                    <p>Inventi Labs - 2018 - 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.copyright}>Copyright © 2020 | Martin Zvozil</p>

                </div>
                :
                //CZ

                <div className={styles.main}>

                    <h1>O mně</h1>
                    <div className={styles.container} id="about">
                        <div className={styles.skills}>
                            <h2>Vývoj</h2>
                            <p>HTML, CSS, React.js, JavaScript, WordPress</p>

                            <h2>Grafika</h2>
                            <p>Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma</p>

                            <h2>Kontakt</h2>
                            <p>E-mail: martin.zvozil@gmail.com</p>
                            <p>Tel: +420 725 054 299</p>
                            <br />
                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>

                        <div className={styles.experienceContainer}>
                            <h2>Předchozí zaměstnání</h2>
                            <div className={styles.experience}>
                                <img src={expBar} alt="experience bar"></img>
                                <div className={styles.expData}>
                                    <h2>Freelancing</h2>
                                    <p>2020</p>

                                    <h2>Testing</h2>
                                    <p>Passengera - 2019 - 2020</p>

                                    <h2>Testing, Grafik</h2>
                                    <p>Inventi Labs - 2018 - 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.copyright}>Copyright © 2020 | Martin Zvozil</p>

                </div>
            }
        </div>
    )
}

export default footer
