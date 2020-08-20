import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styles from '../styles/header.module.css';

class header extends React.Component {

    render() {
        {

            return (
                <div className={styles.header}>
                    {this.props.english === true ?

                        <div className={styles.innerHeader}>
                            <div className={styles.languageContainer}>
                                <select name="cars" id="cars" onChange={() => { (this.props.handleLanguageChange()) }}>
                                    <option value="english" selected="selected">English</option>
                                    <option value="czech">Česky</option>
                                </select>
                            </div>
                            <div className={styles.navContainer}>
                                <nav>
                                    <AnchorLink offset='100' href='#project'>Projects</AnchorLink>
                                    <AnchorLink offset='100' href='#about'>About</AnchorLink>
                                </nav>
                            </div>
                        </div>
                        :

                        <div className={styles.innerHeader}>
                            <div className={styles.languageContainer}>
                                <select name="cars" id="cars" onChange={() => { (this.props.handleLanguageChange()) }}>
                                    <option value="english">English</option>
                                    <option value="czech" selected="selected">Česky</option>
                                </select>
                            </div>
                            <div className={styles.navContainer}>
                                <nav>
                                    <AnchorLink offset='100' href='#project'>Projekty</AnchorLink>
                                    <AnchorLink offset='100' href='#about'>O mně</AnchorLink>
                                </nav>
                            </div>
                        </div>

                    }
                </div>


            )
        }
    }
}

export default header
