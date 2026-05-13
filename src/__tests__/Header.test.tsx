import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../components/Header';

describe('Header', () => {
  const onClearCompleted = vi.fn();

  beforeEach(() => {
    onClearCompleted.mockClear();
  });

  it('renders title and active count', () => {
    render(
      <Header
        activeCount={5}
        hasCompleted={false}
        onClearCompleted={onClearCompleted}
      />
    );
    expect(screen.getByText('📝 Todo List')).toBeInTheDocument();
    expect(screen.getByText('5 tugas tersisa')).toBeInTheDocument();
  });

  it('shows "Sudah selesai semua!" when no active tasks', () => {
    render(
      <Header
        activeCount={0}
        hasCompleted={true}
        onClearCompleted={onClearCompleted}
      />
    );
    expect(screen.getByText(/Sudah selesai semua/i)).toBeInTheDocument();
  });

  it('shows clear completed button when there are completed tasks', async () => {
    render(
      <Header
        activeCount={3}
        hasCompleted={true}
        onClearCompleted={onClearCompleted}
      />
    );
    const clearBtn = screen.getByText(/Hapus yang selesai/i);
    expect(clearBtn).toBeInTheDocument();
  });

  it('does not show clear completed button when no completed tasks', () => {
    render(
      <Header
        activeCount={3}
        hasCompleted={false}
        onClearCompleted={onClearCompleted}
      />
    );
    expect(screen.queryByText(/Hapus yang selesai/i)).not.toBeInTheDocument();
  });
});