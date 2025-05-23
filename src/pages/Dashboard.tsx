
import React, { useState } from 'react';
import { Book, Calendar, Award, Progress, Clock, Star, Video, Download, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    level: "Advanced",
    totalCourses: 8,
    completedCourses: 5,
    certificates: 4,
    studyHours: 156
  });

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete IoT Development with ESP32",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "Building Weather Dashboard",
      timeRemaining: "2h 30m",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "PCB Design with Altium Designer",
      instructor: "Dr. Alex Kumar",
      progress: 45,
      totalLessons: 20,
      completedLessons: 9,
      nextLesson: "Component Placement Strategies",
      timeRemaining: "5h 15m",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Advanced 3D Printing Techniques",
      instructor: "Emily Rodriguez",
      progress: 90,
      totalLessons: 16,
      completedLessons: 14,
      nextLesson: "Post-Processing Mastery",
      timeRemaining: "1h 45m",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop"
    }
  ];

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Build Your First IoT Weather Station",
      date: "2024-01-15",
      time: "10:00 AM EST",
      instructor: "Dr. Sarah Johnson",
      type: "Live Online"
    },
    {
      id: 2,
      title: "Robotic Arm Control with ROS",
      date: "2024-01-22",
      time: "2:00 PM EST",
      instructor: "Prof. Michael Chen",
      type: "Live Online"
    }
  ];

  const certificates = [
    {
      id: 1,
      course: "IoT Fundamentals",
      issueDate: "2023-12-15",
      certificateId: "NT-IOT-2023-001",
      status: "Issued"
    },
    {
      id: 2,
      course: "3D Printing Essentials",
      issueDate: "2023-11-20",
      certificateId: "NT-3DP-2023-045",
      status: "Issued"
    },
    {
      id: 3,
      course: "Robotics Programming",
      issueDate: "2023-10-10",
      certificateId: "NT-ROB-2023-089",
      status: "Issued"
    }
  ];

  const achievements = [
    { title: "First Course Completed", description: "Completed your first course", earned: true },
    { title: "Quick Learner", description: "Completed 3 courses in a month", earned: true },
    { title: "Workshop Attendee", description: "Attended 5 workshops", earned: true },
    { title: "Project Master", description: "Completed 10 hands-on projects", earned: false },
    { title: "Community Helper", description: "Helped 50 fellow students", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
                  <p className="text-blue-100 text-lg">Ready to continue your hardware engineering journey?</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{user.studyHours}</div>
                <div className="text-blue-100">Study Hours</div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{user.totalCourses}</div>
              <div className="text-gray-600">Enrolled Courses</div>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{user.completedCourses}</div>
              <div className="text-gray-600">Completed</div>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{user.certificates}</div>
              <div className="text-gray-600">Certificates</div>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{user.studyHours}h</div>
              <div className="text-gray-600">Study Time</div>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="courses" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto h-12 bg-gray-100 rounded-xl p-1">
              <TabsTrigger value="courses" className="rounded-lg font-medium">My Courses</TabsTrigger>
              <TabsTrigger value="workshops" className="rounded-lg font-medium">Workshops</TabsTrigger>
              <TabsTrigger value="certificates" className="rounded-lg font-medium">Certificates</TabsTrigger>
              <TabsTrigger value="achievements" className="rounded-lg font-medium">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
                <Button variant="outline">View All Courses</Button>
              </div>
              
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {course.progress}% Complete
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                        {course.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">by {course.instructor}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0 space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                          <span>{course.timeRemaining} left</span>
                        </div>
                        <ProgressBar value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-gray-900 mb-1">Next Lesson:</div>
                        <div className="text-sm text-gray-600">{course.nextLesson}</div>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Learning
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Workshops</h2>
                <Button variant="outline">Browse All Workshops</Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="border-0 shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{workshop.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">by {workshop.instructor}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="text-sm">{workshop.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="text-sm">{workshop.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Video className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="text-sm">{workshop.type}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Registered</Badge>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
                <Button variant="outline">Verify Certificate</Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="border-0 shadow-md p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.course}</h3>
                    <p className="text-gray-600 text-sm mb-3">Certificate ID: {cert.certificateId}</p>
                    <p className="text-gray-500 text-sm mb-4">Issued: {cert.issueDate}</p>
                    
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full text-blue-600">
                        Verify Online
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
                <div className="text-gray-600">
                  {achievements.filter(a => a.earned).length} of {achievements.length} earned
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`border-0 shadow-md p-6 text-center ${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-50'}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      achievement.earned 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                        : 'bg-gray-300'
                    }`}>
                      <Star className={`w-8 h-8 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-2 ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                    
                    {achievement.earned && (
                      <Badge className="mt-3 bg-green-100 text-green-700">
                        Earned
                      </Badge>
                    )}
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

export default Dashboard;
