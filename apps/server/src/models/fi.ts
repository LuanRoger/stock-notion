export interface FiData {
  name: string;
  actualValue: number;
  dividendYield: number;
  segment?: string;
  yield: {
    lastYield?: {
      value: number;
      percentage: number;
      basePrice: number;
      date: Date;
    };
    nextYield?: {
      value: number;
      percentage: number;
      basePrice: number;
      date: Date;
    };
  };
}
