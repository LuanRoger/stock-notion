export interface PagePropertyIdentifier {
  rowIdColumnName: string;
  rowId: string;
}

export interface PropertiesOptions extends PagePropertyIdentifier {
  properties: PageProperty[];
}

interface BaseProperty {
  name: string;
}

export type PageProperty =
  | (BaseProperty & { type: "text"; value: string })
  | (BaseProperty & { type: "number"; value: number });
