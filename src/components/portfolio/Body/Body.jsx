import React from 'react';
import styles from './Body.module.css';

const Body = ({ info }) => {
  const { name, age, description } = info;

  return (
    <main className={styles.body}>
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.paragraph}><strong>Name:</strong> {name}</p>
        <p className={styles.paragraph}><strong>Age:</strong> {age}</p>
        <p className={styles.paragraph}>{description}</p>
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.paragraph}>[Add your project details here]</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </section>
    </main>
  );
};

export default Body;
