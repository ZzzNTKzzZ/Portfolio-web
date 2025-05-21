import style from "./EditorZone.module.css"

import Toolbar from "../Toolbar/Toolbar"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import PortfolioTemplate from "../../portfolio/PortfolioTemplate"
export default function EditorZone() {
    const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  })
    return (
            <div className={style.container}>
                <div className={style.toolbar}>
                    <Toolbar editor={editor} />
                </div>
                <div className={style.zone}>
                    <PortfolioTemplate />
                </div>
            </div>
    )
}