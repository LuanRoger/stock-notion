export interface PropertiesOptions {
  rowIdColumnName: string;
  properties: Record<string, PageProperty[]>;
}

export interface PagePropertyIdentifier {
  rowId: string;
  rowIdColumnName: string;
}

interface BaseProperty {
  name: string;
}

export type PageProperty =
  | (BaseProperty & { type: "text"; value: string })
  | (BaseProperty & { type: "number"; value: number })
  | (BaseProperty & { type: "date"; value: Date });
