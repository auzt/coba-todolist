type Filter = 'all' | 'active' | 'completed';

interface FilterBarProps {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  counts: { all: number; active: number; completed: number };
}

export function FilterBar({ activeFilter, onFilterChange, counts }: FilterBarProps) {
  const filters: { key: Filter; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
            activeFilter === key
              ? 'bg-white shadow-sm text-blue-600'
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
}