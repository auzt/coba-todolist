import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Simple in-memory localStorage mock
const storage: Record<string, string> = {};

beforeEach(() => {
  Object.keys(storage).forEach((k) => delete storage[k]);
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => storage[key] ?? null,
      setItem: (key: string, value: string) => { storage[key] = value; },
      removeItem: (key: string) => { delete storage[key]; },
      clear: () => { Object.keys(storage).forEach((k) => delete storage[k]); },
    },
    writable: true,
  });
});

describe('useLocalStorage', () => {
  it('should return initial value when no data in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('should return stored value from localStorage', () => {
    storage['test-key'] = JSON.stringify('stored');
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('stored');
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    act(() => {
      result.current[1]('updated');
    });
    expect(storage['test-key']).toBe(JSON.stringify('updated'));
  });

  it('should work with objects', () => {
    const objValue = { name: 'test', count: 5 };
    const { result } = renderHook(() => useLocalStorage('obj-key', { name: '', count: 0 }));
    act(() => {
      result.current[1](objValue);
    });
    expect(JSON.parse(storage['obj-key'] || '')).toEqual(objValue);
  });

  it('should return initial value on JSON parse error', () => {
    storage['bad-json'] = 'invalid-json';
    const { result } = renderHook(() => useLocalStorage('bad-json', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });
});