
import React from 'react';
import WorkshopCard from '@/components/workshops/WorkshopCard';
import { Workshop, formatDate } from '@/types/workshop';

interface WorkshopsListProps {
  workshops: Workshop[];
}

const WorkshopsList: React.FC<WorkshopsListProps> = ({ workshops }) => {
  // Add the Smart Tracker workshop to the list of workshops
  const allWorkshops = [
    {
      id: 'smart-tracker',
      title: 'Build Your Own Smart Tracker — Like JioTag & AirTag!',
      description: 'Learn to build a complete IoT smart tracker using ESP32, Bluetooth, and mobile integration in this hands-on workshop.',
      date: '2025-06-13',
      time: '10:00 AM - 1:00 PM IST',
      duration: '3 days',
      price: 1299,
      discountPrice: 499,
      instructor: 'Yashwanth Chityala',
      category: 'IoT',
      type: 'Online',
      level: 'Beginner',
      participants: 46,
      maxParticipants: 50,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1580508021100-ace82bda6be5?w=800&h=400&fit=crop',
      included: [
        'ESP32 Development Kit',
        'Project Source Code',
        'Certificate of Completion',
        'Lifetime Access to Materials',
        '2 Weeks Post-Workshop Support'
      ],
      url: '/workshops/smart-tracker'
    },
    ...workshops
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {allWorkshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} formatDate={formatDate} />
      ))}
    </div>
  );
};

export default WorkshopsList;
