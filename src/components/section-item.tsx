"use client";

import {
  DEFAULT_FAQ_SECTION_KEY,
  DEFAULT_HOW_TO_USE_SECTION_KEY,
  DEFAULT_NOTION_DATA_SOURCE_SECTION_KEY,
  DEFAULT_NOTION_SETTINGS_SECTION_KEY,
} from "@/constants";
import SectionWrapper from "./section-wrapper";
import { BookOpenIcon, CircleHelpIcon, SettingsIcon } from "lucide-react";
import NotionSettingsForm from "./notion-settings-form";
import HowToUseSection from "./how-to-use-section";
import { DragControls, Reorder, useDragControls } from "motion/react";
import { OrderKeys } from "@/types/order";
import { ReactNode } from "react";
import FaqSection from "./faq-section";
import { UpdateNotionSection } from "./update-notion-section";

interface SectionConfig {
  title: string;
  collapsible: boolean;
  icon: ReactNode | null;
  component: React.ComponentType;
}

const SECTIONS_CONFIG: Record<OrderKeys, SectionConfig> = {
  [DEFAULT_NOTION_DATA_SOURCE_SECTION_KEY]: {
    title: "Fonte de dados do Notion",
    collapsible: false,
    icon: null,
    component: UpdateNotionSection,
  },
  [DEFAULT_NOTION_SETTINGS_SECTION_KEY]: {
    title: "Configuração dos campos",
    collapsible: true,
    icon: <SettingsIcon size={18} />,
    component: NotionSettingsForm,
  },
  [DEFAULT_HOW_TO_USE_SECTION_KEY]: {
    title: "Como usar",
    collapsible: true,
    icon: <BookOpenIcon size={18} />,
    component: HowToUseSection,
  },
  [DEFAULT_FAQ_SECTION_KEY]: {
    title: "Perguntas frequentes",
    collapsible: true,
    icon: <CircleHelpIcon size={18} />,
    component: FaqSection,
  },
};

interface SectionItemProps {
  sectionKey: OrderKeys;
  onDragStart: (
    e: React.PointerEvent<Element> | PointerEvent,
    control: DragControls
  ) => void;
}

export default function SectionItem({
  sectionKey,
  onDragStart,
}: SectionItemProps) {
  const dragControls = useDragControls();
  const config = SECTIONS_CONFIG[sectionKey];
  const Component = config.component;

  return (
    <Reorder.Item
      key={sectionKey}
      value={sectionKey}
      dragListener={false}
      dragControls={dragControls}
    >
      <SectionWrapper
        title={config.title}
        icon={config.icon}
        collapsible={config.collapsible}
        onDragStart={(e) => onDragStart(e, dragControls)}
      >
        <Component />
      </SectionWrapper>
    </Reorder.Item>
  );
}
