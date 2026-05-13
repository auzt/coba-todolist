import { useState, type FormEvent } from 'react';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, data: { title: string; deadline?: string }) => void;
  onDelete: (id: string) => void;
}

function formatDeadline(dateStr: string | undefined): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDeadline, setEditDeadline] = useState(todo.deadline || '');

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    onEdit(todo.id, { title: editTitle.trim(), deadline: editDeadline || undefined });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDeadline(todo.deadline || '');
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm('Yakin hapus tugas ini?')) {
      onDelete(todo.id);
    }
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSave} className="flex flex-col sm:flex-row gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex-1">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Edit judul"
          />
        </div>
        <div className="sm:w-36">
          <input
            type="date"
            value={editDeadline}
            onChange={(e) => setEditDeadline(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Edit batas akhir"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Simpan
          </button>
          <button type="button" onClick={handleCancel} className="px-3 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Batal
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
        aria-label={todo.completed ? 'Tandai belum selesai' : 'Tandai selesai'}
      />
      <div className="flex-1 min-w-0">
        <span className={`block text-gray-800 truncate ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.title}
        </span>
        {todo.deadline && (
          <span className={`text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-500'}`}>
            📅 {formatDeadline(todo.deadline)}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Edit tugas"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Hapus tugas"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}