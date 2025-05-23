import React from "react";
import style from "./EditorZone.module.css";

import Toolbar from "../Toolbar/Toolbar";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Header from "../../portfolio/Header/Header";
import EditComponents from "../EditComponents/EditComponents";

export default function EditorZone() {
  return (
    <div className={style.container}>
        <Header />
        <Toolbar />
        <EditComponents content={"hello"}/>
    </div>
  );
}
