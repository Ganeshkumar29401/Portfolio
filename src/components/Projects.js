import Card from "../UI/Card";
import styles from "./Projects.module.css";
import music from '../asset/music.png';
import quiz from '../asset/quiz.png';
const Projects = (props) => {
  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.image}>
          <img src={music} alt="Project demo" />
          <p>Tech</p>
        </div>
        <div className={styles.details}>
            <h2>Spotify player clone</h2>
            <a href="#">view source</a>
        </div>
      </Card>
      <Card>
        <div className={styles.image}>
          <img src={quiz} alt="Project demo" />
          <p>Tech</p>
        </div>
        <div className={styles.details}>
            <h2>Quiz App</h2>
            <a href="#">view source</a>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
