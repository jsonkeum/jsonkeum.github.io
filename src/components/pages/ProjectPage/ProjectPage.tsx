import React from "react";
import styles from './ProjectPage.module.css';
import linkIcon from '../../../assets/icons/link.svg';
import TechIcon from "../../widgets/TechIcon/TechIcon";

type Project = {
  "title": string;
  "duration": string;
  "url": string;
  "stack": string[];
  "legacy": string[];
  "description": string;
  "media": string;
  "image": boolean;
  "bgColor": string;
}

type Props = {
  project: Project;
}

const ProjectPage: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.ProjectPage_container} style={{
      backgroundImage: `radial-gradient(${project.bgColor} 0%, rgba(0,0,0,1) 90%)`
    }}>
      <div className={styles.ProjectPage_info_container}>
        <a href={project.url} target='_blank'><h1>{project.title}<img className={styles.ProjectPage_link_icon} src={linkIcon}/></h1></a>
        <h3>{project.duration}</h3>
        <h4>Stack</h4>
        <div className={styles.ProjectPage_stack_drawer}>
          {project.stack.map((tech => <TechIcon tech={tech} key={tech} />))}
        </div>
        
        {!!project.legacy.length &&
          <>
            <h5>Legacy Tech</h5>
            <div className={styles.ProjectPage_stack_drawer}>
              {project.legacy.map((tech => <TechIcon tech={tech} key={tech} small />))}
            </div>
          </>
        }
        <p>{project.description}</p>
      </div>
      <div className={styles.ProjectPage_media_container}>
        <div>
          <div className={styles.ProjectPage_media_container_dimmer}></div>
          {project.image ?
            <img src={project.media} /> : 
            <video src={project.media} autoPlay muted loop />
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;