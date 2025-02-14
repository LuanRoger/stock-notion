export interface PropertiesOptions {
  rowIdColumnName: string;
  rowId: string;
  properties: PageProperty[];
}

interface BaseProperty {
  name: string;
}

export type PageProperty =
  | (BaseProperty & { type: "text"; value: string })
  | (BaseProperty & { type: "number"; value: number });
