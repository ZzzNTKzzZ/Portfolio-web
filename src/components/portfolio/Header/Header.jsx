import React from 'react';
import styles from './Header.module.css';
import { useCurrentEditor, EditorContent } from '@tiptap/react';

const Header = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <EditorContent editor={editor} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
