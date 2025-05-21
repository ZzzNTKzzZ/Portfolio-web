// src/components/Editor/Toolbar.js

import { Bold, Italic, Heading1 } from 'lucide-react'
import styles from './Toolbar.module.css'

const Toolbar = ({ editor, onClick }) => {
  if (!editor) return null

  return (
    <div className={styles.toolbar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${styles.button} ${editor.isActive('bold') ? styles.active : ''}`}
        title="Bold"
      >
        <Bold size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${styles.button} ${editor.isActive('italic') ? styles.active : ''}`}
        title="Italic"
      >
        <Italic size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${styles.button} ${editor.isActive('heading', { level: 1 }) ? styles.active : ''}`}
        title="Heading 1"
      >
        <Heading1 size={16} />
      </button>
      <button onClick={onClick}>=</button>
    </div>
  )
}

export default Toolbar
