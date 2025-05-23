import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Video, Star, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Workshops = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Upcoming', 'IoT', 'Robotics', '3D Printing', 'PCB Design'];

  const workshops = [
    {
      id: 1,
      title: "Build Your First IoT Weather Station",
      instructor: "Dr. Sarah Johnson",
      date: "2024-01-15",
      time: "10:00 AM - 4:00 PM IST",
      duration: "6 hours",
      type: "Live Online",
      level: "Beginner",
      category: "IoT",
      participants: 45,
      maxParticipants: 50,
      price: 9999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      description: "Learn to build a complete IoT weather station using ESP32, sensors, and cloud dashboard.",
      prerequisites: ["Basic programming knowledge", "No hardware experience required"],
      included: ["ESP32 Development Kit", "Sensor Kit", "Breadboard & Jumpers", "Lifetime Access to Materials"],
      outcomes: ["Build functional weather station", "ESP32 programming skills", "IoT cloud integration", "Real-time data visualization"],
      status: "upcoming",
      url: "/workshops/iot-weather-station"
    },
    {
      id: 2,
      title: "Robotic Arm Control with ROS",
      instructor: "Prof. Michael Chen",
      date: "2024-01-22",
      time: "2:00 PM - 8:00 PM IST",
      duration: "6 hours",
      type: "Live Online",
      level: "Intermediate",
      category: "Robotics",
      participants: 28,
      maxParticipants: 30,
      price: 14999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      description: "Master robotic arm programming using ROS framework and inverse kinematics.",
      prerequisites: ["Basic Python knowledge", "Linux familiarity recommended"],
      included: ["Virtual Robot Simulator", "ROS Installation Guide", "Sample Code Repository", "Certificate of Completion"],
      outcomes: ["ROS fundamentals", "Robotic kinematics", "Path planning", "Real robot simulation"],
      status: "upcoming"
    },
    {
      id: 3,
      title: "Advanced 3D Printing Techniques",
      instructor: "Emily Rodriguez",
      date: "2024-01-29",
      time: "11:00 AM - 5:00 PM IST",
      duration: "6 hours",
      type: "Hybrid",
      level: "Advanced",
      category: "3D Printing",
      participants: 35,
      maxParticipants: 40,
      price: 12999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop",
      description: "Explore advanced 3D printing materials, multi-color printing, and post-processing techniques.",
      prerequisites: ["Basic 3D printing experience", "Access to 3D printer recommended"],
      included: ["Sample Filaments", "STL Files Collection", "Post-processing Tools Guide", "Material Database Access"],
      outcomes: ["Multi-material printing", "Support optimization", "Post-processing mastery", "Quality troubleshooting"],
      status: "upcoming"
    },
    {
      id: 4,
      title: "PCB Design Masterclass",
      instructor: "Dr. Alex Kumar",
      date: "2024-02-05",
      time: "9:00 AM - 3:00 PM IST",
      duration: "6 hours",
      type: "Live Online",
      level: "Intermediate",
      category: "PCB Design",
      participants: 22,
      maxParticipants: 25,
      price: 16999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
      description: "Professional PCB design workflow from schematic to manufacturing-ready boards.",
      prerequisites: ["Basic electronics knowledge", "Altium Designer access"],
      included: ["Altium Designer Trial", "Component Libraries", "Design Templates", "Manufacturing Guidelines"],
      outcomes: ["Professional PCB layout", "Design rule optimization", "Manufacturing preparation", "Signal integrity basics"],
      status: "upcoming"
    }
  ];

  const pastWorkshops = [
    {
      id: 5,
      title: "Arduino Programming Bootcamp",
      instructor: "Mark Thompson",
      date: "2023-12-18",
      duration: "4 hours",
      participants: 68,
      rating: 4.8,
      category: "IoT",
      recordingAvailable: true,
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Drone Assembly & Programming",
      instructor: "Lisa Park",
      date: "2023-12-11",
      duration: "8 hours",
      participants: 42,
      rating: 4.7,
      category: "Robotics",
      recordingAvailable: true,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=250&fit=crop"
    }
  ];

  const filteredWorkshops = workshops.filter(workshop => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Upcoming') return workshop.status === 'upcoming';
    return workshop.category === selectedFilter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hardware Engineering Workshops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our intensive hands-on workshops and learn from industry experts through practical projects.
            </p>
          </div>

          {/* Tabs */}
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
              {/* Filters */}
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

              {/* Workshop Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white">
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
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white">
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
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Workshops;
