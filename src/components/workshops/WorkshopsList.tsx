
import React from 'react';
import WorkshopCard from '@/components/workshops/WorkshopCard';
import { Workshop, formatDate } from '@/types/workshop';

interface WorkshopsListProps {
  workshops: Workshop[];
}

const WorkshopsList: React.FC<WorkshopsListProps> = ({ workshops }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {workshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} formatDate={formatDate} />
      ))}
    </div>
  );
};

export default WorkshopsList;
