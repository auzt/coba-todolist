import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoItem } from '../components/TodoItem';

describe('TodoItem', () => {
  const toggle = vi.fn();
  const edit = vi.fn();
  const remove = vi.fn();

  const todo = {
    id: '1',
    title: 'Test Todo',
    completed: false,
    createdAt: new Date().toISOString(),
  };

  beforeEach(() => {
    toggle.mockClear();
    edit.mockClear();
    remove.mockClear();
  });

  it('renders todo title', () => {
    render(<TodoItem todo={todo} onToggle={toggle} onEdit={edit} onDelete={remove} />);
    expect(screen.getByText(todo.title)).toBeInTheDocument();
  });

  it('calls onToggle when checkbox clicked', async () => {
    render(<TodoItem todo={todo} onToggle={toggle} onEdit={edit} onDelete={remove} />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(toggle).toHaveBeenCalledWith(todo.id);
  });

  it('enters edit mode when edit button clicked', async () => {
    render(<TodoItem todo={todo} onToggle={toggle} onEdit={edit} onDelete={remove} />);
    const editBtn = screen.getByRole('button', { name: /edit/i });
    await userEvent.click(editBtn);
    const titleInput = screen.getByLabelText(/edit judul/i);
    expect(titleInput).toHaveValue(todo.title);
  });

  it('shows delete button', async () => {
    render(<TodoItem todo={todo} onToggle={toggle} onEdit={edit} onDelete={remove} />);
    const deleteBtn = screen.getByRole('button', { name: /hapus/i });
    expect(deleteBtn).toBeInTheDocument();
  });
});