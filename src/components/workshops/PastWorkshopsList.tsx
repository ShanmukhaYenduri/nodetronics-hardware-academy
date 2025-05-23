
import React from 'react';
import PastWorkshopCard from '@/components/workshops/PastWorkshopCard';
import { PastWorkshop, formatDate } from '@/types/workshop';

interface PastWorkshopsListProps {
  pastWorkshops: PastWorkshop[];
}

const PastWorkshopsList: React.FC<PastWorkshopsListProps> = ({ pastWorkshops }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pastWorkshops.map((workshop) => (
        <PastWorkshopCard key={workshop.id} workshop={workshop} formatDate={formatDate} />
      ))}
    </div>
  );
};

export default PastWorkshopsList;
