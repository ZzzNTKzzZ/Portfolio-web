// src/components/Editor/Toolbar.js

import { Bold, Italic, Heading1 } from 'lucide-react'

const Toolbar = ({ editor }) => {
  if (!editor) return null

  return (
    <div className="flex gap-2 border-b pb-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
        title="Bold"
      >
        <Bold size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
        title="Italic"
      >
        <Italic size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
        title="Heading 1"
      >
        <Heading1 size={16} />
      </button>
    </div>
  )
}

export default Toolbar
