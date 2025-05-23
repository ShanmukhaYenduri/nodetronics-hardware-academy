
import React from 'react';
import { Calendar, Clock, Users, Video, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PastWorkshop } from '@/types/workshop';

interface PastWorkshopCardProps {
  workshop: PastWorkshop;
  formatDate: (dateString: string) => string;
}

const PastWorkshopCard: React.FC<PastWorkshopCardProps> = ({ workshop, formatDate }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={workshop.image} 
          alt={workshop.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-gray-600 text-white px-3 py-1">
            Completed
          </Badge>
        </div>
        {workshop.recordingAvailable && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 text-white px-3 py-1">
              Recording Available
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {workshop.category}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-600">{workshop.rating}</span>
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
          {workshop.title}
        </CardTitle>
        <p className="text-gray-600 text-sm">by {workshop.instructor}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">{formatDate(workshop.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">{workshop.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">{workshop.participants} participants</span>
          </div>
        </div>
        
        {workshop.recordingAvailable ? (
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            <Video className="mr-2 w-4 h-4" />
            Watch Recording
          </Button>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Recording Not Available
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PastWorkshopCard;
