import { Todo, Action } from '../types/todo';

export const initialState: Todo[] = [];

export function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD': {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        deadline: action.payload.deadline,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...state, newTodo];
    }

    case 'TOGGLE': {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    case 'EDIT': {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              deadline: action.payload.deadline,
            }
          : todo
      );
    }

    case 'DELETE': {
      return state.filter((todo) => todo.id !== action.payload.id);
    }

    case 'CLEAR_COMPLETED': {
      return state.filter((todo) => !todo.completed);
    }

    default:
      return state;
  }
}