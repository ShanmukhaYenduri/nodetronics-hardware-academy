
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'IoT & Embedded', 'Robotics', '3D Printing', 'CAD & PCB', 'VLSI'];

  const courses = [
    {
      id: 1,
      title: "Complete IoT Development with ESP32",
      instructor: "Dr. Sarah Johnson",
      category: "IoT & Embedded",
      level: "Intermediate",
      duration: "12 weeks",
      students: 2847,
      rating: 4.9,
      price: 299,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      description: "Master IoT development from basics to advanced projects using ESP32, sensors, and cloud integration.",
      skills: ["ESP32 Programming", "Sensor Integration", "Cloud IoT", "Real-time Data"],
      projects: 8
    },
    {
      id: 2,
      title: "Autonomous Robot Design & Programming",
      instructor: "Prof. Michael Chen",
      category: "Robotics",
      level: "Advanced",
      duration: "16 weeks",
      students: 1923,
      rating: 4.8,
      price: 399,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      description: "Build and program autonomous robots using ROS, computer vision, and machine learning.",
      skills: ["ROS Framework", "Computer Vision", "Path Planning", "AI Integration"],
      projects: 6
    },
    {
      id: 3,
      title: "Professional 3D Printing & Design",
      instructor: "Emily Rodriguez",
      category: "3D Printing",
      level: "Beginner",
      duration: "8 weeks",
      students: 3521,
      rating: 4.7,
      price: 199,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop",
      description: "Master 3D printing technologies, design principles, and rapid prototyping techniques.",
      skills: ["CAD Design", "3D Printing", "Material Science", "Prototyping"],
      projects: 10
    },
    {
      id: 4,
      title: "PCB Design with Altium Designer",
      instructor: "Dr. Alex Kumar",
      category: "CAD & PCB",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1654,
      rating: 4.9,
      price: 349,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
      description: "Professional PCB design using industry-standard tools and best practices.",
      skills: ["Altium Designer", "Schematic Design", "Layout Optimization", "Signal Integrity"],
      projects: 5
    },
    {
      id: 5,
      title: "VLSI Design Fundamentals",
      instructor: "Dr. Priya Singh",
      category: "VLSI",
      level: "Advanced",
      duration: "14 weeks",
      students: 987,
      rating: 4.8,
      price: 449,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      description: "Comprehensive VLSI design course covering digital circuit design and verification.",
      skills: ["Verilog/VHDL", "Logic Design", "FPGA Programming", "Verification"],
      projects: 4
    },
    {
      id: 6,
      title: "Industrial Automation with PLC",
      instructor: "Mark Thompson",
      category: "IoT & Embedded",
      level: "Intermediate",
      duration: "6 weeks",
      students: 2156,
      rating: 4.6,
      price: 249,
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=250&fit=crop",
      description: "Learn industrial automation using PLCs, HMIs, and SCADA systems.",
      skills: ["PLC Programming", "HMI Design", "Industrial Networks", "Process Control"],
      projects: 7
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hardware Engineering Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master cutting-edge hardware technologies through hands-on projects and expert guidance.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search courses, instructors, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-lg border-gray-200 focus:border-blue-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`rounded-full px-6 ${
                      selectedCategory === category 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing {filteredCourses.length} courses
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white px-3 py-1">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                      ${course.price}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {course.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {course.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">by {course.instructor}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {course.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{course.projects} projects</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg group">
                      View Course Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No courses found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
