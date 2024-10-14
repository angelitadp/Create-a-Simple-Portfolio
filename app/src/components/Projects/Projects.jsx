import React from "react";
import styles from "./Projects.module.css";
import project from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.project}>
          {project.map((projectItem, id) => {
            return (
              <li key={id} className={styles.projectItem}>
                <img
                  src={getImageUrl(projectItem.source)}
                  alt={`${projectItem.description} Logo`}
                />
                <div className={styles.projectItemDetails}>
                  {/* Link to project */}
                  <a
                    href={projectItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{projectItem.projectName}</h3>
                  </a>
                  <p>{projectItem.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
