export interface Todo {
  id: string;
  title: string;
  deadline?: string;
  completed: boolean;
  createdAt: string;
}

export type Action =
  | { type: 'ADD'; payload: { title: string; deadline?: string } }
  | { type: 'TOGGLE'; payload: { id: string } }
  | { type: 'EDIT'; payload: { id: string; title: string; deadline?: string } }
  | { type: 'DELETE'; payload: { id: string } }
  | { type: 'CLEAR_COMPLETED' };