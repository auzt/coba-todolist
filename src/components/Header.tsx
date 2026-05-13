interface HeaderProps {
  activeCount: number;
  hasCompleted: boolean;
  onClearCompleted: () => void;
}

export function Header({ activeCount, hasCompleted, onClearCompleted }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
      <h1 className="text-2xl font-bold text-gray-800">📝 Todo List</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-600">
          {activeCount === 0 ? 'Sudah selesai semua! 🎉' : `${activeCount} tugas tersisa`}
        </span>
        {hasCompleted && (
          <button
            onClick={onClearCompleted}
            className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Hapus yang selesai
          </button>
        )}
      </div>
    </header>
  );
}