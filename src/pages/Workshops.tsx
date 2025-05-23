
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkshopsHeader from '@/components/workshops/WorkshopsHeader';
import FilterButtons from '@/components/workshops/FilterButtons';
import WorkshopsList from '@/components/workshops/WorkshopsList';
import PastWorkshopsList from '@/components/workshops/PastWorkshopsList';
import { filters, workshopsData, pastWorkshopsData } from '@/types/workshop';

const Workshops = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredWorkshops = workshopsData.filter(workshop => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Upcoming') return workshop.status === 'upcoming';
    return workshop.category === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <WorkshopsHeader />

          <Tabs defaultValue="upcoming" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 bg-gray-100 rounded-xl p-1">
              <TabsTrigger value="upcoming" className="rounded-lg text-base font-medium">
                Upcoming Workshops
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-lg text-base font-medium">
                Past Workshops
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-8">
              <FilterButtons 
                filters={filters}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
              <WorkshopsList workshops={filteredWorkshops} />
            </TabsContent>

            <TabsContent value="past" className="mt-8">
              <PastWorkshopsList pastWorkshops={pastWorkshopsData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Workshops;
