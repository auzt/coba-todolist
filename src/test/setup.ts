import '@testing-library/jest-dom';

// Simple in-memory localStorage mock that actually stores/retrieves
const storage: Record<string, string> = {};

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (key: string) => storage[key] ?? null,
    setItem: (key: string, value: string) => { storage[key] = value; },
    removeItem: (key: string) => { delete storage[key]; },
    clear: () => { Object.keys(storage).forEach((k) => delete storage[k]); },
  },
  writable: true,
});

// Mock crypto.randomUUID
Object.defineProperty(window, 'crypto', {
  value: {
    randomUUID: () => Math.random().toString(36).substring(2) + Date.now().toString(36),
  },
  writable: true,
});