
import React from 'react';
import { Button } from '@/components/ui/button';

interface FilterButtonsProps {
  filters: string[];
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  filters, 
  selectedFilter, 
  setSelectedFilter 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilter === filter ? "default" : "outline"}
          className={`rounded-full px-6 ${
            selectedFilter === filter 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
          }`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
