import Card from "../UI/Card";
import styles from "./Projects.module.css";
import music from "../asset/music.png";
import quiz from "../asset/quiz.png";
const Projects = (props) => {
  return (
    <div className={styles.container}>
      <Card>
        <div className="wrapper">
          <img src={music} alt="Project demo" />
          <div className={styles.details}>
            <h2>Spotify player clone</h2>
            <p>A spotify player clone has feature like play or pause,forward and backward,like and mute</p>
            <h3>Used Technologies : <span>Html,CSS3,Javascript</span></h3>
            <a href="#">view source</a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
