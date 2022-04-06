import { Fragment } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <h2>Contact Me</h2>
        <form className={styles.form}>
          <div className={styles.formfields}>
            <label htmlFor="text">Name *</label>
            <input id="text" type="text" />
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" />
            <label htmlFor="text">Subject</label>
            <input id="text" type="text" />
            <label htmlFor="text">Message</label>
            <textarea />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
