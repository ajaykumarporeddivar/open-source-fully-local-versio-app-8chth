export interface Document {
  id: string;
  title: string;
  content: string;
  status: 'active' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface Operation {
  id: string;
  documentId: string;
  type: 'summarize' | 'rephrase' | 'generate';
  input: string; // The original text or prompt for the operation
  output: string; // The AI-generated output
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string; // URL to avatar image
  joinedAt: string; // Added this field
}