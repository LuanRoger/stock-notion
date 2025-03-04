"use client";

import { DragControls, Reorder, useDragControls } from "motion/react";
import NotionDatabaseForm from "./notion-database-form";
import SectionWrapper from "./section-wrapper";
import { SettingsIcon } from "lucide-react";
import NotionSettingsForm from "./notion-settings-form";
import HowToUseSection from "./how-to-use-section";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";
import { SECTIONS_ORDER_KEY } from "@/constants/local-storage";
import {
  DEFAULT_HOW_TO_USE_SECTION_KEY,
  DEFAULT_NOTION_DATABASE_SECTION_KEY,
  DEFAULT_NOTION_SETTINGS_SECTION_KEY,
} from "@/constants";
import { DEFAULT_SECTIONS_ORDER } from "@/constants/defaults";

export default function Sections() {
  const [order, setOrder] = useState<string[]>([]);
  const notionDatabaseControl = useDragControls();
  const notionSettingsControl = useDragControls();
  const howToUseControl = useDragControls();

  useEffect(() => {
    const order =
      getLocalStorage<string[]>(SECTIONS_ORDER_KEY) ?? DEFAULT_SECTIONS_ORDER;
    setOrder(order);
  }, []);

  function handleDragStart(
    e: React.PointerEvent<Element> | PointerEvent,
    control: DragControls
  ) {
    control.start(e);
  }

  function onReorder(newOrder: string[]) {
    setLocalStorage(SECTIONS_ORDER_KEY, newOrder);
    setOrder(newOrder);
  }

  return (
    <Reorder.Group values={order} onReorder={onReorder}>
      {order.map((sectionName) => {
        if (sectionName === "notion-database") {
          return (
            <Reorder.Item
              key={DEFAULT_NOTION_DATABASE_SECTION_KEY}
              value={DEFAULT_NOTION_DATABASE_SECTION_KEY}
              dragListener={false}
              dragControls={notionDatabaseControl}
            >
              <SectionWrapper
                title="Banco de dados do Notion"
                collapsible={false}
                onDragStart={(e) => handleDragStart(e, notionDatabaseControl)}
              >
                <NotionDatabaseForm />
              </SectionWrapper>
            </Reorder.Item>
          );
        }
        if (sectionName === DEFAULT_NOTION_SETTINGS_SECTION_KEY) {
          return (
            <Reorder.Item
              key={DEFAULT_NOTION_SETTINGS_SECTION_KEY}
              value={DEFAULT_NOTION_SETTINGS_SECTION_KEY}
              dragListener={false}
              dragControls={notionSettingsControl}
            >
              <SectionWrapper
                title="Configuração dos campos"
                icon={<SettingsIcon size={18} />}
                onDragStart={(e) => handleDragStart(e, notionSettingsControl)}
              >
                <NotionSettingsForm />
              </SectionWrapper>
            </Reorder.Item>
          );
        }
        if (sectionName === DEFAULT_HOW_TO_USE_SECTION_KEY) {
          return (
            <Reorder.Item
              key={DEFAULT_HOW_TO_USE_SECTION_KEY}
              value={DEFAULT_HOW_TO_USE_SECTION_KEY}
              dragListener={false}
              dragControls={howToUseControl}
            >
              <SectionWrapper
                title="Como usar"
                collapsible={false}
                onDragStart={(e) => handleDragStart(e, howToUseControl)}
              >
                <HowToUseSection />
              </SectionWrapper>
            </Reorder.Item>
          );
        }
      })}
    </Reorder.Group>
  );
}
