import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Video, Star, Check, ArrowRight, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock workshop data - would come from a database in a real application
const workshopData = {
  'iot-weather-station': {
    title: "Build Your First IoT Weather Station",
    instructor: "Dr. Sarah Johnson",
    instructorTitle: "Senior IoT Engineer at Nodetronics",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    instructorDescription: "Dr. Sarah Johnson has over 10 years of experience in IoT development and has led teams at major tech companies. She specializes in sensor integration and cloud computing for IoT devices.",
    date: "2024-01-15",
    time: "10:00 AM - 4:00 PM IST",
    duration: "6 hours",
    type: "Live Online",
    level: "Beginner",
    category: "IoT",
    participants: 45,
    maxParticipants: 50,
    price: 9999,
    discountPrice: 7999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    description: "Learn to build a complete IoT weather station using ESP32, sensors, and cloud dashboard in this hands-on workshop. Perfect for beginners with basic programming knowledge who want to dive into the world of IoT and connected devices.",
    longDescription: "This comprehensive workshop will take you from understanding basic IoT concepts to building a fully functional weather station that can collect environmental data and display it on a custom cloud dashboard. You'll learn about sensor selection, calibration, power management, wireless connectivity, and data visualization techniques that you can apply to any IoT project.",
    prerequisites: [
      "Basic programming knowledge (any language)",
      "Familiarity with Arduino IDE (helpful but not required)",
      "No hardware experience required",
      "Laptop with USB port"
    ],
    included: [
      "ESP32 Development Kit",
      "Temperature & Humidity Sensor",
      "Barometric Pressure Sensor",
      "Breadboard & Jumper Wires",
      "USB Cable",
      "Access to Cloud Platform",
      "Project Source Code",
      "Certificate of Completion",
      "Lifetime Access to Workshop Materials",
      "2 Weeks Post-Workshop Support"
    ],
    outcomes: [
      "Build a complete IoT weather station from scratch",
      "Learn ESP32 programming for sensor integration",
      "Master IoT cloud platform integration",
      "Implement real-time data visualization dashboards",
      "Understand IoT security best practices",
      "Design energy-efficient IoT solutions",
      "Troubleshoot common IoT connectivity issues",
      "Create custom alerts based on sensor data"
    ],
    skills: [
      "IoT Development",
      "ESP32 Programming",
      "Sensor Integration",
      "Cloud Computing",
      "Data Visualization",
      "Hardware Integration",
      "Embedded Systems",
      "Wireless Communication"
    ],
    faq: [
      {
        question: "Do I need to buy any hardware before the workshop?",
        answer: "No, all necessary hardware is included in the workshop kit that will be provided to you."
      },
      {
        question: "Will the workshop be recorded?",
        answer: "Yes, the workshop will be recorded and the recording will be available for 30 days after the event."
      },
      {
        question: "What if I have technical issues during the workshop?",
        answer: "We'll have technical support staff available during the workshop to help troubleshoot any issues."
      },
      {
        question: "Can I get a refund if I can't attend?",
        answer: "Refunds are available up to 7 days before the workshop date. After that, you can transfer your registration to a future workshop."
      }
    ],
    reviews: [
      {
        name: "Arjun Sharma",
        rating: 5,
        comment: "This was an excellent workshop! Dr. Johnson explained complex concepts in a very accessible way, and the hands-on portions were extremely valuable."
      },
      {
        name: "Priya Patel",
        rating: 4,
        comment: "Great content and well-structured. The only reason I'm not giving 5 stars is that I wish we had a bit more time for the final project."
      },
      {
        name: "Vikram Mehta",
        rating: 5,
        comment: "Exactly what I needed to kickstart my IoT journey. The kit provided was high quality and the instructor was very knowledgeable and patient."
      }
    ],
    agenda: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Introduction to IoT and Weather Stations",
        description: "Overview of IoT concepts and how they apply to environmental monitoring."
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Hardware Setup and Component Introduction",
        description: "Exploring the ESP32 and connecting sensors to the development board."
      },
      {
        time: "11:30 AM - 12:30 PM",
        title: "Programming the ESP32",
        description: "Writing code to read data from sensors and process environmental data."
      },
      {
        time: "12:30 PM - 1:30 PM",
        title: "Lunch Break",
        description: "Take a break and recharge."
      },
      {
        time: "1:30 PM - 2:30 PM",
        title: "Cloud Integration",
        description: "Setting up cloud services to receive and store data from your IoT device."
      },
      {
        time: "2:30 PM - 3:30 PM",
        title: "Building the Dashboard",
        description: "Creating a visual dashboard to display weather data in real-time."
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Final Q&A and Next Steps",
        description: "Troubleshooting, project ideas, and resources for further learning."
      }
    ]
  },
  'smart-tracker': {
    title: "Build Your Own Smart Tracker — Like JioTag & AirTag!",
    instructor: "Yashwanth Chityala",
    instructorTitle: "IoT Expert & Embedded Systems Engineer",
    instructorImage: "https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyashwanth-teaching.70d0bc5a.png&w=1920&q=75",
    instructorDescription: "Yashwanth Chityala has collaborated with IIT Madras on cutting-edge IoT projects and brings unparalleled expertise as a highly skilled embedded systems engineer.",
    date: "2025-06-13",
    time: "10:00 AM - 1:00 PM IST",
    duration: "3 days",
    type: "Live Online",
    level: "Beginner",
    category: "IoT",
    participants: 46,
    maxParticipants: 50,
    price: 1299,
    discountPrice: 499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580508021100-ace82bda6be5?w=1200&h=600&fit=crop",
    description: "Learn to build a complete IoT smart tracker using ESP32, Bluetooth, and mobile integration in this hands-on workshop.",
    longDescription: "This comprehensive 3-day workshop will teach you to build a real-world Smart Tracker device like JioTag and AirTag from scratch. No prior experience needed! You'll learn IoT fundamentals, ESP32 programming, Bluetooth Low Energy communication, and much more through hands-on sessions.",
    prerequisites: [
      "No prior experience needed",
      "Basic computer skills",
      "Curiosity to learn",
      "Computer with internet connection"
    ],
    included: [
      "ESP32 Development Kit",
      "Project Templates & Code Library",
      "Free Lifetime Community Access",
      "Direct WhatsApp Support",
      "Certificate of Completion",
      "Premium E-books and learning resources",
      "Personal mentorship and career guidance",
      "Discount for Premium IoT Masterclass"
    ],
    outcomes: [
      "Build a complete IoT smart tracker from scratch",
      "Learn ESP32 programming for IoT devices",
      "Master Bluetooth Low Energy (BLE) communication",
      "Understand real-time device tracking principles",
      "Design energy-efficient IoT solutions",
      "Implementation of mobile device connectivity",
      "Troubleshoot common IoT connectivity issues",
      "Create custom alerts based on sensor data"
    ],
    skills: [
      "IoT Development",
      "ESP32 Programming",
      "Bluetooth Low Energy",
      "Embedded Systems",
      "Mobile Integration",
      "Wireless Communication",
      "Hardware Integration"
    ],
    faq: [
      {
        question: "Do I need any prior experience or technical knowledge?",
        answer: "No prior experience is needed. This workshop is beginner-friendly and starts from the very basics."
      },
      {
        question: "What will I learn apart from building the tracker?",
        answer: "Beyond building a tracker, you'll learn IoT fundamentals, microcontroller programming, Bluetooth communication, mobile app integration, and product development skills."
      },
      {
        question: "What is the duration of the workshop?",
        answer: "The workshop runs for 3 consecutive days, with approximately 3 hours of live session each day."
      },
      {
        question: "Will I get support if I face issues during the project build?",
        answer: "Absolutely! You'll have direct access to Yashwanth and the Nodetronics team via WhatsApp for technical support."
      }
    ],
    reviews: [
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "Fantastic workshop! I had zero experience with IoT but managed to build a working smart tracker by the end of the third day. Yashwanth is an excellent instructor!"
      },
      {
        name: "Priya Singh",
        rating: 4,
        comment: "Very practical approach to learning IoT. The hands-on experience was invaluable, and the post-workshop support helped me overcome some technical challenges."
      },
      {
        name: "Arjun Mehta",
        rating: 5,
        comment: "Worth every rupee! The bonuses alone are worth the price, but the workshop itself was incredibly educational and fun."
      }
    ],
    agenda: [
      {
        time: "Day 1",
        title: "Introduction to Smart Hardware & Bluetooth",
        description: "Learn IoT fundamentals, ESP32 basics, and Bluetooth Low Energy (BLE) principles."
      },
      {
        time: "Day 2",
        title: "Build Your Smart Tracker (Hands-On)",
        description: "Design and implement smart tracker logic, real-time pairing, and sensor data processing."
      },
      {
        time: "Day 3",
        title: "Final Integration, Going Live & Certification",
        description: "Complete your project, optimize performance, and get certified with your working smart tracker."
      }
    ],
    url: '/workshops/smart-tracker' // Direct link to the dedicated landing page
  }
};

const WorkshopDetails = () => {
  const { workshopId } = useParams<{ workshopId: string }>();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isApplying, setIsApplying] = useState(false);
  
  // Get workshop data based on the ID from URL parameters
  const workshop = workshopData[workshopId as keyof typeof workshopData];
  
  // If workshop doesn't exist, show 404 message
  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Workshop Not Found</h1>
          <p className="mb-6">The workshop you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/workshops">Back to Workshops</a>
          </Button>
        </div>
      </div>
    );
  }

  // For Smart Tracker workshop, redirect to the dedicated landing page
  if (workshopId === 'smart-tracker') {
    navigate('/workshops/smart-tracker');
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleApplyCoupon = () => {
    setIsApplying(true);
    
    // Mock coupon validation - in real app, this would be an API call
    setTimeout(() => {
      if (couponCode.toUpperCase() === 'NODETRONICS10') {
        const discount = Math.round(workshop.price * 0.1); // 10% discount
        setAppliedDiscount(discount);
        toast({
          title: "Coupon Applied!",
          description: `You received a ₹${discount} discount.`,
          variant: "default"
        });
      } else if (couponCode.toUpperCase() === 'WELCOME20') {
        const discount = Math.round(workshop.price * 0.2); // 20% discount
        setAppliedDiscount(discount);
        toast({
          title: "Coupon Applied!",
          description: `You received a ₹${discount} discount.`,
          variant: "default"
        });
      } else {
        setAppliedDiscount(0);
        toast({
          title: "Invalid Coupon",
          description: "The coupon code you entered is invalid or expired.",
          variant: "destructive"
        });
      }
      setIsApplying(false);
    }, 1000);
  };

  const handleProceedToPayment = () => {
    // In a real app, this would redirect to a payment gateway
    toast({
      title: "Redirecting to Payment",
      description: "Setting up your payment...",
      variant: "default"
    });
    
    // Mock redirect - in real app this would go to a payment page
    window.location.href = `/payment?workshop=${workshopId}&amount=${workshop.price - appliedDiscount}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src={workshop.image} 
              alt={workshop.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="md:max-w-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-blue-500 text-white px-3 py-1">
                    {workshop.category}
                  </Badge>
                  <Badge className="bg-green-500 text-white px-3 py-1">
                    {workshop.level}
                  </Badge>
                  <Badge className="bg-purple-500 text-white px-3 py-1">
                    {workshop.type}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{workshop.title}</h1>
                <p className="text-lg md:text-xl mb-4">{workshop.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDate(workshop.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{workshop.participants}/{workshop.maxParticipants} participants</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-bold">{workshop.rating}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <span>{workshop.reviews.length} reviews</span>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0">
                <div className="bg-white p-6 rounded-xl shadow-lg text-gray-900">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold mb-1">Register Now</h3>
                    <p className="text-gray-500 mb-2">{workshop.participants} already registered</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-3xl font-bold text-blue-600">₹{workshop.discountPrice}</div>
                      <div className="text-xl text-gray-500 line-through">₹{workshop.price}</div>
                    </div>
                    <div className="text-green-500 font-medium">
                      Save ₹{workshop.price - workshop.discountPrice} (20% off)
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Live, interactive sessions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>All hardware included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>2 weeks post-workshop support</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex gap-2 mb-4">
                      <Input 
                        placeholder="Coupon code" 
                        className="flex-grow" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button 
                        variant="outline" 
                        onClick={handleApplyCoupon}
                        disabled={isApplying || !couponCode}
                      >
                        Apply
                      </Button>
                    </div>
                    
                    {appliedDiscount > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="text-green-700 font-medium">Coupon Applied!</div>
                          <div className="text-green-700 font-medium">-₹{appliedDiscount}</div>
                        </div>
                        <div className="text-green-600 text-sm">
                          You saved ₹{appliedDiscount} with {couponCode}
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" 
                      size="lg"
                      onClick={handleProceedToPayment}
                    >
                      Register Now <ArrowRight className="ml-2" />
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center mt-3">
                      Secure payment powered by Razorpay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-7 gap-8">
            <div className="md:col-span-5">
              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="grid w-full grid-cols-4 max-w-2xl h-12 bg-gray-100 rounded-xl p-1">
                  <TabsTrigger value="overview" className="rounded-lg text-sm md:text-base font-medium">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="agenda" className="rounded-lg text-sm md:text-base font-medium">
                    Agenda
                  </TabsTrigger>
                  <TabsTrigger value="instructor" className="rounded-lg text-sm md:text-base font-medium">
                    Instructor
                  </TabsTrigger>
                  <TabsTrigger value="faqs" className="rounded-lg text-sm md:text-base font-medium">
                    FAQs
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-8">
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About This Workshop</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {workshop.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {workshop.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {workshop.included.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                      <div className="space-y-3">
                        {workshop.prerequisites.map((prerequisite, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{prerequisite}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Skills You'll Gain</h2>
                      <div className="flex flex-wrap gap-2">
                        {workshop.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="agenda" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Workshop Agenda</h2>
                  <div className="space-y-6">
                    {workshop.agenda.map((item, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <div className="text-blue-600 font-medium">{item.time}</div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-8">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:max-w-xs">
                      <img 
                        src={workshop.instructorImage} 
                        alt={workshop.instructor}
                        className="rounded-lg w-full object-cover aspect-square"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{workshop.instructor}</h2>
                      <p className="text-gray-600 mb-4">{workshop.instructorTitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {workshop.instructorDescription}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-full">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.54 10.54 0 01-3.125 1.196 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                          Twitter
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="faqs" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {workshop.faq.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Reviews Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Reviews</h2>
                <div className="space-y-6">
                  {workshop.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 mt-8 md:mt-0">
              {/* Sticky CTA Card for Mobile */}
              <div className="md:sticky md:top-24">
                <Card className="shadow-lg overflow-hidden bg-white border-0">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold mb-2">Register Now</h3>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="text-2xl font-bold text-blue-600">₹{workshop.discountPrice}</div>
                        <div className="text-lg text-gray-500 line-through">₹{workshop.price}</div>
                      </div>
                      <div className="text-green-500 font-medium text-sm">
                        Save ₹{workshop.price - workshop.discountPrice} (20% off)
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span>Live, interactive sessions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span>All hardware included</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span>2 weeks post-workshop support</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex gap-2 mb-4">
                        <Input 
                          placeholder="Coupon code" 
                          className="flex-grow" 
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <Button 
                          variant="outline" 
                          onClick={handleApplyCoupon}
                          disabled={isApplying || !couponCode}
                        >
                          Apply
                        </Button>
                      </div>
                      
                      {appliedDiscount > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-between">
                            <div className="text-green-700 font-medium">Coupon Applied!</div>
                            <div className="text-green-700 font-medium">-₹{appliedDiscount}</div>
                          </div>
                          <div className="text-green-600 text-sm">
                            You saved ₹{appliedDiscount} with {couponCode}
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" 
                        size="lg"
                        onClick={handleProceedToPayment}
                      >
                        Register Now <ArrowRight className="ml-2" />
                      </Button>
                      
                      <p className="text-sm text-gray-500 text-center mt-3">
                        Secure payment powered by Razorpay
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkshopDetails;
