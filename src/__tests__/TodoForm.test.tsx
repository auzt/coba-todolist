import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoForm } from '../components/TodoForm';

describe('TodoForm', () => {
  const handleAdd = vi.fn();

  beforeEach(() => {
    handleAdd.mockClear();
  });

  it('renders form with input and button', () => {
    render(<TodoForm onAdd={handleAdd} />);
    expect(screen.getByPlaceholderText(/apa tugasnya/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tambah/i })).toBeInTheDocument();
  });

  it('does not call onAdd when title is empty', async () => {
    render(<TodoForm onAdd={handleAdd} />);
    await userEvent.click(screen.getByRole('button', { name: /tambah/i }));
    expect(handleAdd).not.toHaveBeenCalled();
  });

  it('calls onAdd with title when submitted', async () => {
    render(<TodoForm onAdd={handleAdd} />);
    const titleInput = screen.getByPlaceholderText(/apa tugasnya/i);
    await userEvent.type(titleInput, 'Belajar TypeScript');
    await userEvent.click(screen.getByRole('button', { name: /tambah/i }));
    expect(handleAdd).toHaveBeenCalledWith({ title: 'Belajar TypeScript' });
  });

  it('resets form after successful submit', async () => {
    render(<TodoForm onAdd={handleAdd} />);
    const titleInput = screen.getByPlaceholderText(/apa tugasnya/i);
    await userEvent.type(titleInput, 'Test');
    await userEvent.click(screen.getByRole('button', { name: /tambah/i }));
    expect(titleInput).toHaveValue('');
  });
});