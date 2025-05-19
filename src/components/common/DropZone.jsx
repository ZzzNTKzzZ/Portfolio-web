// DropZone.jsx
import React from "react";

export default function DropZone({ zoneId, item, onDrop, onDragStart }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(zoneId)}
      style={{
        width: 200,
        height: 200,
        border: "2px dashed #888",
        padding: 10,
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {item && (
        <div
          draggable
          onDragStart={() => onDragStart(item, zoneId)}
          style={{
            padding: 10,
            backgroundColor: zoneId === "zone1" ? "#4caf50" : "#2196f3",
            color: "white",
            cursor: "grab",
            textAlign: "center",
          }}
        >
          {item.text}
        </div>
      )}
    </div>
  );
}
