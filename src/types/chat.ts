
export interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  isLoading?: boolean;
}

export type SampleResponsesType = Record<string, string>;
