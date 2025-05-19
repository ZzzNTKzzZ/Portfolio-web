// src/components/Editor/EditorWrapper.js

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'

const EditorWrapper = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello, world!</p>',
  })

  return (
    <div className="editor-wrapper" >
      <Toolbar editor={editor} />
      <div className="editor-content" style={{width: "200px"}}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default EditorWrapper
