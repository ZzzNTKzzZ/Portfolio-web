import React from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function Draggable({ children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-editor",
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab",
    display: "inline-block",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default function EditComponents({ content }) {
  return (
    <DndContext>
      <Draggable>
        <EditorProvider extensions={[StarterKit]} content={content}>
        </EditorProvider>
      </Draggable>
    </DndContext>
  );
}
