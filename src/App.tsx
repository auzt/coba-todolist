import { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { DarkModeToggle } from './components/DarkModeToggle';
import { todoReducer } from './store/todoReducer';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Todo } from './types';

type Filter = 'all' | 'active' | 'completed';

function filterTodos(todos: Todo[], filter: Filter): Todo[] {
  switch (filter) {
    case 'active':
      return todos.filter((t) => !t.completed);
    case 'completed':
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [state, dispatch] = useReducer(todoReducer, todos);
  const [filter, setFilter] = useLocalStorage<Filter>('filter', 'all');

  // Sync state dengan todos dari localStorage
  const currentTodos = todos.length > 0 ? todos : state;

  const activeCount = currentTodos.filter((t) => !t.completed).length;
  const completedCount = currentTodos.filter((t) => t.completed).length;
  const filteredTodos = filterTodos(currentTodos, filter);

  const handleAdd = (data: { title: string; deadline?: string }) => {
    dispatch({ type: 'ADD', payload: data });
    // Update localStorage after dispatch
    setTimeout(() => {
      const newState = todoReducer(currentTodos, { type: 'ADD', payload: data });
      setTodos(newState);
    }, 0);
  };

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE', payload: { id } });
    setTimeout(() => {
      const newState = todoReducer(currentTodos, { type: 'TOGGLE', payload: { id } });
      setTodos(newState);
    }, 0);
  };

  const handleEdit = (id: string, data: { title: string; deadline?: string }) => {
    dispatch({ type: 'EDIT', payload: { id, ...data } });
    setTimeout(() => {
      const newState = todoReducer(currentTodos, { type: 'EDIT', payload: { id, ...data } });
      setTodos(newState);
    }, 0);
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
    setTimeout(() => {
      const newState = todoReducer(currentTodos, { type: 'DELETE', payload: { id } });
      setTodos(newState);
    }, 0);
  };

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
    setTimeout(() => {
      const newState = todoReducer(currentTodos, { type: 'CLEAR_COMPLETED' });
      setTodos(newState);
    }, 0);
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header with dark mode toggle */}
        <div className="flex items-center justify-between">
          <Header
            activeCount={activeCount}
            hasCompleted={completedCount > 0}
            onClearCompleted={handleClearCompleted}
          />
          <DarkModeToggle />
        </div>

        {/* Todo Form */}
        <TodoForm onAdd={handleAdd} />

        {/* Filter Bar */}
        <FilterBar
          activeFilter={filter}
          onFilterChange={setFilter}
          counts={{
            all: currentTodos.length,
            active: activeCount,
            completed: completedCount,
          }}
        />

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;