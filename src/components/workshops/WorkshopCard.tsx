
import React from 'react';
import { Calendar, Clock, Users, Video, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Workshop } from '@/types/workshop';

interface WorkshopCardProps {
  workshop: Workshop;
  formatDate: (dateString: string) => string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop, formatDate }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={workshop.image} 
          alt={workshop.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-blue-600 text-white px-3 py-1">
            {workshop.level}
          </Badge>
          <Badge className="bg-green-600 text-white px-3 py-1">
            {workshop.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
            ₹{workshop.price}
          </div>
        </div>
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
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
          {workshop.title}
        </CardTitle>
        <p className="text-gray-600 text-sm">by {workshop.instructor}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 leading-relaxed mb-6">
          {workshop.description}
        </CardDescription>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">{formatDate(workshop.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">{workshop.time} ({workshop.duration})</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">
              {workshop.participants}/{workshop.maxParticipants} participants
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Video className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm">{workshop.type}</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {workshop.included.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg group"
          asChild
        >
          <a href={workshop.url || "#"}>
            Register Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkshopCard;
