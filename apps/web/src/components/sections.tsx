"use client";

import { DragControls, Reorder } from "motion/react";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";
import { SECTIONS_ORDER_KEY } from "@/constants/local-storage";
import { DEFAULT_SECTIONS_ORDER } from "@/constants/defaults";
import SectionItem from "./section-item";
import { OrderKeys } from "@/types/order";

export default function Sections() {
  const [order, setOrder] = useState<OrderKeys[]>([]);

  useEffect(() => {
    const storedOrder =
      getLocalStorage<OrderKeys[]>(SECTIONS_ORDER_KEY) ??
      DEFAULT_SECTIONS_ORDER;
    setOrder(storedOrder);
  }, []);

  function handleDragStart(
    e: React.PointerEvent<Element> | PointerEvent,
    control: DragControls
  ) {
    control.start(e);
  }

  function onReorder(newOrder: OrderKeys[]) {
    setLocalStorage(SECTIONS_ORDER_KEY, newOrder);
    setOrder(newOrder);
  }

  return (
    <Reorder.Group values={order} onReorder={onReorder}>
      {order.map((sectionKey) => (
        <SectionItem
          key={sectionKey}
          sectionKey={sectionKey}
          onDragStart={handleDragStart}
        />
      ))}
    </Reorder.Group>
  );
}
