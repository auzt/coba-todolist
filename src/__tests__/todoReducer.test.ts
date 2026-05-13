import { describe, it, expect } from 'vitest';
import { todoReducer } from '../store/todoReducer';

describe('todoReducer', () => {
  it('should return empty array as initial state', () => {
    expect(todoReducer([], { type: 'UNKNOWN' } as any)).toEqual([]);
  });

  it('should add a new todo', () => {
    const action = { type: 'ADD' as const, payload: { title: 'Test todo', deadline: '2026-05-13' } };
    const state = todoReducer([], action);
    expect(state).toHaveLength(1);
    expect(state[0]?.title).toBe('Test todo');
    expect(state[0]?.completed).toBe(false);
  });

  it('should toggle a todo', () => {
    const initialWithTodo = [{
      id: '1',
      title: 'Test',
      completed: false,
      createdAt: new Date().toISOString(),
    }];
    const action = { type: 'TOGGLE' as const, payload: { id: '1' } };
    const state = todoReducer(initialWithTodo, action);
    expect(state[0]?.completed).toBe(true);
  });

  it('should edit a todo', () => {
    const initialWithTodo = [{
      id: '1',
      title: 'Original',
      completed: false,
      createdAt: new Date().toISOString(),
    }];
    const action = { type: 'EDIT' as const, payload: { id: '1', title: 'Updated' } };
    const state = todoReducer(initialWithTodo, action);
    expect(state[0]?.title).toBe('Updated');
  });

  it('should delete a todo', () => {
    const initialWithTodo = [{
      id: '1',
      title: 'To delete',
      completed: false,
      createdAt: new Date().toISOString(),
    }];
    const action = { type: 'DELETE' as const, payload: { id: '1' } };
    const state = todoReducer(initialWithTodo, action);
    expect(state).toHaveLength(0);
  });

  it('should clear completed todos', () => {
    const initialWithTodos = [
      { id: '1', title: 'Active', completed: false, createdAt: new Date().toISOString() },
      { id: '2', title: 'Completed', completed: true, createdAt: new Date().toISOString() },
    ];
    const action = { type: 'CLEAR_COMPLETED' as const };
    const state = todoReducer(initialWithTodos, action);
    expect(state).toHaveLength(1);
    expect(state[0]?.id).toBe('1');
  });

  it('should return state for unknown action', () => {
    const state = todoReducer([], { type: 'UNKNOWN' as const });
    expect(state).toEqual([]);
  });
});