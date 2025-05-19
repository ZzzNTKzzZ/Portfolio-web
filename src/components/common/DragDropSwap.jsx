// DragDropSwap.jsx
import React, { useRef, useState } from "react";
import DropZone from "./DropZone";

export default function DragDropSwap() {
  const [zone1Item, setZone1Item] = useState({ id: "item1", text: "Item 1" });
  const [zone2Item, setZone2Item] = useState({ id: "item2", text: "Item 2" });

  const draggedItemRef = useRef(null);
  const sourceZoneRef = useRef(null);

  const handleDragStart = (item, sourceZone) => {
    draggedItemRef.current = item;
    sourceZoneRef.current = sourceZone;
  };

  const handleDrop = (targetZone) => {
    const draggedItem = draggedItemRef.current;
    const sourceZone = sourceZoneRef.current;

    if (!draggedItem || !sourceZone || sourceZone === targetZone) return;

    if (targetZone === "zone1") {
      setZone1Item(draggedItem);
      setZone2Item(zone1Item);
    } else {
      setZone2Item(draggedItem);
      setZone1Item(zone2Item);
    }

    draggedItemRef.current = null;
    sourceZoneRef.current = null;
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Kéo-thả để hoán đổi giữa 2 vùng</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <DropZone
          zoneId="zone1"
          item={zone1Item}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <DropZone
          zoneId="zone2"
          item={zone2Item}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
      </div>
    </div>
  );
}
