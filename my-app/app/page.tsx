import styles from "./page.module.css";
import "./vars.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form className={styles.loginForm}>
          <div className={styles.outer}>
            <h1 style={{ margin: 0 }}>Contact Us</h1>

            <div className={styles.row}>
              <div className={styles.rowInner}>
                <label className={styles.label} htmlFor="first-name">
                  First Name *
                </label>
                <input className={styles.input} type="text" id="first-name" />
              </div>
              <div className={styles.rowInner}>
                <label className={styles.label} htmlFor="last-name">
                  Last Name *
                </label>
                <input className={styles.input} type="text" id="last-name" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.rowInner}>
                <label className={styles.label} htmlFor="email">
                  Email Address *
                </label>
                <input className={styles.input} type="text" id="email" />
              </div>
            </div>

            <div style={{ marginTop: "var(--spacing-unit)" }}>
              <label>Query Type *</label>
              <div
                className={styles.row}
                style={{ paddingTop: "var(--label-padding-bottom" }}
              >
                <label className={styles.labelRadio}>
                  <span className={styles.radioButtonSpan}>
                    <input
                      className={styles.radioButton}
                      type="radio"
                      name="option"
                      value="General Inquiry"
                    />
                  </span>
                  <span className={styles.supportLabel}>General Enquiry</span>
                </label>
                <label className={styles.labelRadio}>
                  <span className={styles.radioButtonSpan}>
                    <input
                      className={styles.radioButton}
                      type="radio"
                      name="option"
                      value="Support Request"
                    />
                  </span>
                  <span className={styles.supportLabel}>Support Request</span>
                </label>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.rowInner}>
                <label className={styles.label} htmlFor="email">
                  Message *
                </label>
                <textarea className={styles.textarea} rows={5}></textarea>
              </div>
            </div>

            <div className={styles.row}>
              <label className={styles.checkBoxLabel}>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                  name="option1"
                  value="1"
                />
                <span style={{ paddingLeft: "1em" }}>
                  I consent being contacted by the team *
                </span>
              </label>
            </div>

            <input className={styles.submit} type="submit" value="Submit" />
          </div>
        </form>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Mustapha Rashiduddin</a>.
        </div>
      </div>
    </div>
  );
}
