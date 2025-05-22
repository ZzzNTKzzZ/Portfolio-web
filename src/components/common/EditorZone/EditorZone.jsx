import style from "./EditorZone.module.css";

import Toolbar from "../Toolbar/Toolbar";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


export default function EditorZone() {
  const editorProps = {
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  };

  return (
    <div className={style.container}>

      <EditorProvider {...editorProps}>
        <div className={style.toolbar}>
          <Toolbar />
        </div>
        <div className={style.zone}>
        </div>
      </EditorProvider>
    </div>
  );
}
