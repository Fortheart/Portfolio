import React from 'react';
import styles from '../styles/main.module.css';

import cancelIcon from '../img/close.png';

import wpLogo from '../img/wordpress.png';
import JavascriptLogo from '../img/javascript.png';
import reactLogo from '../img/react.png';
import contentfulLogo from '../img/contentful.png';
import figmaLogo from '../img/figma.png';
import htmlLogo from '../img/html.png';
import cssLogo from '../img/css.png';

import projectsList from '../projects.json';
import czProjectsList from '../projekty.json';

class Main extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            opened: false,
            projects: [],
            czProjects: []
        };

    }
    componentDidMount() {
        const projectsListVar = projectsList;
        const czProjectsListVar = czProjectsList;
        this.setState({
            opened: false,
            projects: projectsListVar,
            czProjects: czProjectsListVar,
            projectId: null
        });
    }

    trigger = (id) => {
        this.setState({ opened: !this.state.opened, projectId: id });
    }



    render() {

        return (
            <div>
                {this.props.english ?
                    <div className={styles.main} id="project">

                        <h1 className={styles.componentHeadline}>Projects</h1>
                        <div className={styles.carousel}>

                            {/*Container */}

                            {this.state.projects.projects && this.state.projects.projects.map(project => {
                                return (
                                    <div className={styles.container} onClick={() => { this.trigger(project.id) }}>
                                        <img src={project.picture} alt="Project"></img>
                                        <div className={styles.textPart}>
                                            <p className={styles.tag}>{project.tag}</p>
                                            <h1>{project.title}</h1>
                                            <p className={styles.perex}>{project.perex}</p>
                                            <button>Show more</button>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                        {/*SPACER*/}
                        <div className={styles.spacer}></div>

                        {/*POPUP CONTAINER */}
                        {
                            this.state.opened === true ?
                                this.state.projects.projects.map(project => {

                                    return (
                                        this.state.projectId === project.id ?
                                            <div className={styles.popupContainer}>
                                                <img src={cancelIcon} className={styles.cancelButton} alt="X" onClick={this.trigger}></img>
                                                <div className={styles.popupData}>
                                                    <img src={project.picture} alt="Project"></img>
                                                    <div className={styles.innerData}>
                                                        <h1>{project.title}</h1>
                                                        <p className={styles.tag}>{project.tag}</p>
                                                        <p className={styles.description}>{project.description}</p>
                                                        {project.WPSupport === true ?
                                                            <img src={wpLogo} alt="WordPress"></img>
                                                            : null}
                                                        {project.ReactSupport === true ?
                                                            <img src={reactLogo} alt="React"></img>
                                                            : null}
                                                        {project.HTMLSupport === true ?
                                                            <img src={htmlLogo} alt="HTML"></img>
                                                            : null}
                                                        {project.CSSSupport === true ?
                                                            <img src={cssLogo} alt="CSS"></img>
                                                            : null}
                                                        {project.JSSupport === true ?
                                                            <img src={JavascriptLogo} alt="JS"></img>
                                                            : null}
                                                        {project.FigmaSupport === true ?
                                                            <img src={figmaLogo} alt="Figma"></img>
                                                            : null}
                                                        {project.ContentfulSupport === true ?
                                                            <img src={contentfulLogo} alt="Contentful"></img>
                                                            : null}
                                                        <div className={styles.links}>
                                                            <a href={project.WebsiteLink} target="_blank" rel="noopener noreferrer"> <button>Website</button></a>
                                                            {project.GitHubEnabled === true ?
                                                                <a href={project.GitHubLink} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
                                                                : null}
                                                        </div>
                                                        <div className={styles.popupSpacer}></div>
                                                    </div>

                                                </div>

                                            </div> : null
                                    )

                                })
                                : null
                        }

                    </div >

                    //CZ
                    :

                    <div className={styles.main} id="project">

                        <h1 className={styles.componentHeadline}>Projects</h1>
                        <div className={styles.carousel}>

                            {/*Container */}

                            {this.state.czProjects.projects && this.state.czProjects.projects.map(project => {
                                return (
                                    <div className={styles.container} onClick={() => { this.trigger(project.id) }}>
                                        <img src={project.picture} alt="Project"></img>
                                        <div className={styles.textPart}>
                                            <p className={styles.tag}>{project.tag}</p>
                                            <h1>{project.title}</h1>
                                            <p className={styles.perex}>{project.perex}</p>
                                            <button>Zobrazit</button>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                        {/*SPACER*/}
                        <div className={styles.spacer}></div>



                        {/*POPUP CONTAINER */}
                        {
                            this.state.opened === true ?
                                this.state.czProjects.projects.map(project => {
                                    return (
                                        this.state.projectId === project.id ?
                                            <div className={styles.popupContainer}>
                                                <img src={cancelIcon} className={styles.cancelButton} alt="X" onClick={this.trigger}></img>
                                                <div className={styles.popupData}>
                                                    <img src={project.picture} alt="Project"></img>
                                                    <div className={styles.innerData}>
                                                        <h1>{project.title}</h1>
                                                        <p className={styles.tag}>{project.tag}</p>
                                                        <p className={styles.description}>{project.description}</p>
                                                        {project.WPSupport === true ?
                                                            <img src={wpLogo} alt="WordPress"></img>
                                                            : null}
                                                        {project.ReactSupport === true ?
                                                            <img src={reactLogo} alt="React"></img>
                                                            : null}
                                                        {project.HTMLSupport === true ?
                                                            <img src={htmlLogo} alt="HTML"></img>
                                                            : null}
                                                        {project.CSSSupport === true ?
                                                            <img src={cssLogo} alt="CSS"></img>
                                                            : null}
                                                        {project.JSSupport === true ?
                                                            <img src={JavascriptLogo} alt="JS"></img>
                                                            : null}
                                                        {project.FigmaSupport === true ?
                                                            <img src={figmaLogo} alt="Figma"></img>
                                                            : null}
                                                        {project.ContentfulSupport === true ?
                                                            <img src={contentfulLogo} alt="Contentful"></img>
                                                            : null}
                                                        <div className={styles.links}>
                                                            <a href={project.WebsiteLink} target="_blank" rel="noopener noreferrer"> <button>Website</button></a>
                                                            {project.GitHubEnabled === true ?
                                                                <a href={project.GitHubLink} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
                                                                : null}
                                                        </div>
                                                        <div className={styles.popupSpacer}></div>
                                                    </div>

                                                </div>

                                            </div> : null
                                    )
                                })
                                : null
                        }

                    </div >

                }
            </div>

        )

    }

}


export default Main;
