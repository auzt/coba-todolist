import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterBar } from '../components/FilterBar';

describe('FilterBar', () => {
  const onFilterChange = vi.fn();

  beforeEach(() => {
    onFilterChange.mockClear();
  });

  it('renders all filter tabs with counts', () => {
    render(
      <FilterBar
        activeFilter="all"
        onFilterChange={onFilterChange}
        counts={{ all: 5, active: 3, completed: 2 }}
      />
    );
    expect(screen.getByText('All (5)')).toBeInTheDocument();
    expect(screen.getByText('Active (3)')).toBeInTheDocument();
    expect(screen.getByText('Completed (2)')).toBeInTheDocument();
  });

  it('calls onFilterChange when a tab is clicked', async () => {
    render(
      <FilterBar
        activeFilter="all"
        onFilterChange={onFilterChange}
        counts={{ all: 5, active: 3, completed: 2 }}
      />
    );
    const completedBtn = screen.getByText('Completed (2)');
    await userEvent.click(completedBtn);
    expect(onFilterChange).toHaveBeenCalledWith('completed');
  });
});