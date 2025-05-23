
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowDown, ArrowRight, Video, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmartTrackerWorkshop = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ hours: 20, minutes: 46, seconds: 17 });
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev; // Timer has expired
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  const handleEnrollNow = () => {
    navigate('/workshops/smart-tracker/register');
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Announcement Banner */}
      <div className="bg-red-600 text-white py-2 animate-pulse">
        <div className="container mx-auto px-4 text-center font-medium">
          🔥 Grab Flat 50% Off: Build Smart Tracker Like JioTag, AirTag! 🔥
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <img 
              src="https://learn.nodetronics.com/_next/static/media/logo.4c97f0ba.svg" 
              alt="Nodetronics" 
              className="h-16 mx-auto mb-12 animate-fade-in"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span>Build Your </span>
              <span className="text-blue-600">Own Smart Tracker</span>
              <span> — Like</span>
              <br className="hidden md:block" />
              <span>JioTag & AirTag!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 animate-fade-in">
              Imagine building your first real-world IoT product — a Smart Tracker — from scratch in just 3 days! Whether you aspire to become a
              Hardware Engineer, IoT Specialist, or Product Innovator, this hands-on workshop is designed for YOU.
            </p>
            
            <div className="relative aspect-video max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-xl animate-scale-in">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Gx4jc2c3xsk" 
                title="Build Your Own Smart Tracker"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-6 mb-12">
              <div className="bg-blue-50 rounded-lg p-6 text-left shadow-md animate-fade-in">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white p-1 rounded-full mr-2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">3 Day</h3>
                </div>
                <p className="text-blue-800">Online Workshop</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 text-left shadow-md animate-fade-in delay-100">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white p-1 rounded-full mr-2">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">Starts on June 13th</h3>
                </div>
                <p className="text-blue-800">- June 15th, 2025</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 max-w-4xl mx-auto mb-12 animate-fade-in delay-200">
              <p className="text-lg text-blue-800 mb-4">
                Imagine building your first real-world IoT product — a Smart Tracker — from scratch in just 3 days!
              </p>
              <div className="font-semibold text-blue-900 text-lg">
                No Prior Experience Needed | 100% Hands-On | Industry-Focused | Certification Included
              </div>
            </div>
            
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white text-lg py-6 px-8 rounded-full shadow-lg animate-bounce"
              onClick={scrollToRegistration}
              size="lg"
            >
              BUILD YOUR SMART TRACKER FOR ₹499/-!
            </Button>
          </div>
        </div>
      </section>
      
      {/* Countdown and CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <div className="bg-blue-600 text-white h-24 w-24 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-blue-600 text-white h-24 w-24 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-blue-600 text-white h-24 w-24 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white text-lg py-6 px-8 rounded-full shadow-lg"
              onClick={scrollToRegistration}
              size="lg"
            >
              BUILD YOUR SMART TRACKER FOR ₹499/-!
            </Button>
          </div>
          
          <div className="text-center text-xl text-gray-700 mb-12 animate-fade-in">
            Join us and turn your idea into a real-world smart device in just 3 days. Seats are limited.
          </div>
        </div>
      </section>
      
      {/* Who Should Attend */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Who Should Attend?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm animate-fade-in">
              Engineering and Diploma students (any year)
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm animate-fade-in delay-100">
              Beginners who want to enter IoT and Smart Devices world
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm animate-fade-in delay-200">
              Students aiming for embedded systems and core tech jobs
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm animate-fade-in delay-300">
              Makers, innovators, and future product builders
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-8 animate-fade-in">
                What will you learn in the Workshop?
              </h2>
              <ArrowRight className="hidden lg:block h-12 w-12 text-blue-600 mt-8 animate-bounce" />
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              {/* Day 1 */}
              <div className="bg-gray-900 text-white rounded-t-xl overflow-hidden animate-fade-in">
                <div className="bg-blue-800 p-4">
                  <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm">
                    DAY 1
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Introduction to Smart Hardware & Bluetooth</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Introduction to IoT and Smart Devices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Understanding ESP32 and Microcontrollers (Your Brain of the Tracker)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>What is Bluetooth Low Energy (BLE) and why is it important?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Setup development environment and make your first BLE broadcast</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Pair and control a smart device using your phone</span>
                  </div>
                </div>
              </div>
              
              {/* Day 2 */}
              <div className="bg-gray-900 text-white overflow-hidden animate-fade-in delay-100">
                <div className="bg-blue-800 p-4">
                  <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm">
                    DAY 2
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Build Your Smart Tracker (Hands-On)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Designing the smart tracker logic and architecture</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Implement real-time device pairing and communication</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Program the ESP32 for tracking and alerts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Capture and process sensor data effectively</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Build, test, and troubleshoot your tracker</span>
                  </div>
                </div>
              </div>
              
              {/* Day 3 */}
              <div className="bg-gray-900 text-white rounded-b-xl overflow-hidden animate-fade-in delay-200">
                <div className="bg-blue-800 p-4">
                  <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm">
                    DAY 3
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Final Integration, Going Live & Certification</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Optimizing performance and final calibration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Debugging and solving real-world issues</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Showcase and submit your project</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Discuss career pathways and project showcase techniques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-400 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>Get Certified and take your smart tracker live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Exclusive Bonuses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Exclusive Bonuses</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Bonus 1 */}
            <div className="bg-blue-900 text-white rounded-lg overflow-hidden animate-fade-in">
              <div className="p-4">
                <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm mb-4">
                  BONUS 1
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Free Lifetime Community Access - Connect, learn, and grow with peers and mentors
                </h3>
                <p className="text-sm border border-dashed border-white/50 inline-block px-2 py-1 rounded">
                  Worth ₹3,000/-
                </p>
              </div>
            </div>
            
            {/* Bonus 2 */}
            <div className="bg-blue-900 text-white rounded-lg overflow-hidden animate-fade-in delay-100">
              <div className="p-4">
                <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm mb-4">
                  BONUS 2
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Project Templates & Code Library - Easily replicate and build new smart devices
                </h3>
                <p className="text-sm border border-dashed border-white/50 inline-block px-2 py-1 rounded">
                  Worth ₹5,000/-
                </p>
              </div>
            </div>
            
            {/* Bonus 3 */}
            <div className="bg-blue-900 text-white rounded-lg overflow-hidden animate-fade-in delay-200">
              <div className="p-4">
                <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm mb-4">
                  BONUS 3
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Direct WhatsApp support from Yashwanth & Nodetronics Team
                </h3>
                <p className="text-sm border border-dashed border-white/50 inline-block px-2 py-1 rounded">
                  Worth ₹7,000/-
                </p>
              </div>
            </div>
            
            {/* Bonus 4 */}
            <div className="bg-blue-900 text-white rounded-lg overflow-hidden animate-fade-in delay-300">
              <div className="p-4">
                <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm mb-4">
                  BONUS 4
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Access to premium E-books and learning resources
                </h3>
                <p className="text-sm border border-dashed border-white/50 inline-block px-2 py-1 rounded">
                  Worth ₹8,000/-
                </p>
              </div>
            </div>
            
            {/* Bonus 5 */}
            <div className="bg-blue-900 text-white rounded-lg overflow-hidden animate-fade-in delay-400">
              <div className="p-4">
                <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm mb-4">
                  BONUS 5
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Personal mentorship and career guidance
                </h3>
                <p className="text-sm border border-dashed border-white/50 inline-block px-2 py-1 rounded">
                  Worth ₹5,000/-
                </p>
              </div>
            </div>
            
            {/* Bonus 6 */}
            <div className="bg-blue-900 text-white rounded-lg overflow-hidden animate-fade-in delay-500">
              <div className="p-4">
                <div className="inline-block py-1 px-3 bg-black bg-opacity-30 rounded-lg text-sm mb-4">
                  BONUS 6
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Discount for Premium 30-Hour IoT Masterclass - Next-level learning and career prep
                </h3>
                <p className="text-sm border border-dashed border-white/50 inline-block px-2 py-1 rounded">
                  Worth ₹2,000/-
                </p>
              </div>
            </div>
          </div>
          
          {/* Message and Video */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">And here's a message for you</h2>
            <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl animate-scale-in">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Gx4jc2c3xsk" 
                title="Build Your Own Smart Tracker"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Urgency and Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <div className="bg-blue-600 text-white h-24 w-24 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-blue-600 text-white h-24 w-24 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-blue-600 text-white h-24 w-24 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white text-lg py-6 px-8 rounded-full shadow-lg"
              onClick={scrollToRegistration}
              size="lg"
            >
              BUILD YOUR SMART TRACKER FOR ₹499/-!
            </Button>
          </div>
          
          <div className="text-center text-xl font-medium text-gray-800 mb-12 animate-fade-in">
            Hurry! Only 04 seats left, grab ₹30,000/- in bonuses now! Enroll before June 5th —after that, 
            the price rises!
          </div>
          
          <div ref={contentRef} className="bg-blue-900 text-white rounded-xl p-12 max-w-3xl mx-auto shadow-2xl animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
            
            <div className="bg-blue-800 rounded-lg py-3 px-6 text-center text-2xl font-bold mb-8 shadow-inner">
              ₹499/- <span className="line-through text-gray-300 text-lg">₹1299/-</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-y-4 gap-x-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Video className="h-5 w-5" />
                </div>
                <span>3-Day Live Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Video className="h-5 w-5" />
                </div>
                <span>Daily 3-Hour Mega Webinar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>Bonuses worth ₹30,000/-</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>Q&A with Yashwanth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>100% Hands-On</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>Content Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>Industry Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 p-1 rounded-full">
                  <Check className="h-5 w-5" />
                </div>
                <span>Certificate</span>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg py-6 px-12 rounded-full font-bold shadow-lg"
                onClick={handleEnrollNow}
                size="lg"
              >
                ENROLL NOW
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Attend / Instructor Bio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Why do I do this workshop?</h2>
          
          <div className="bg-blue-50 rounded-xl p-8 shadow-md animate-fade-in">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Hi! My name is Yashwanth Chityala</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Having collaborated with the esteemed IIT Madras team on multiple cutting-edge IoT projects, 
                    Yashwanth Krishna Chityala brings unparalleled expertise to the table as a highly skilled 
                    embedded systems engineer.
                  </p>
                  <p>
                    With a proven track record in IoT, robotics, and real-time system development, Yashwanth has led 
                    innovative projects involving wireless communication, sensor networks, and motor control systems, 
                    leveraging his hands-on expertise with the ESP32 platform.
                  </p>
                  <p>
                    His extensive work with advanced microcontrollers and systems-level understanding of hardware and 
                    firmware integration enables him to craft efficient, real-world solutions.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyashwanth-teaching.70d0bc5a.png&w=1920&q=75" 
                  alt="Yashwanth teaching" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <img 
                src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop1.64f5cf6f.jpg&w=1080&q=75" 
                alt="Workshop" 
                className="rounded-lg h-40 object-cover w-full"
              />
              <img 
                src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop2.9e7f39e7.jpg&w=1080&q=75" 
                alt="Workshop" 
                className="rounded-lg h-40 object-cover w-full"
              />
              <img 
                src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyashwanth-teaching.70d0bc5a.png&w=1920&q=75" 
                alt="Workshop" 
                className="rounded-lg h-40 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">
              Don't Just Watch Tutorials — Build Something Real!
            </h2>
            <p className="text-xl animate-fade-in delay-100">
              Join our hands-on 3-day workshop and create a real, working smart tracker device from scratch. Get certified, get skilled, and get ahead!
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg py-6 px-12 rounded-full font-bold shadow-lg animate-pulse"
              onClick={handleEnrollNow}
              size="lg"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Pricing and Value Proposition */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-black text-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4">
            <div className="text-xl">Total Value : <span className="line-through">₹30,000/-</span></div>
            <div className="text-xl">Regular Price : <span className="font-bold">₹1,299/-</span></div>
            <div className="bg-blue-800 inline-block px-8 py-3 rounded-lg shadow-lg">
              <div className="font-bold text-2xl">Today's Price :₹499/-</div>
            </div>
            <p className="text-lg mt-8">
              Enroll in the course before the timer ends to unlock bonuses worth ₹30,000/-.
            </p>
            <div className="flex justify-center mt-6">
              <Button 
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg py-6 px-12 rounded-full font-bold shadow-lg animate-pulse"
                onClick={handleEnrollNow}
                size="lg"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            I'm on a MISSION to empower thousands of B.Tech and Diploma students to build their own Smart Tracker.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <img 
              src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop1.64f5cf6f.jpg&w=1080&q=75" 
              alt="Workshop participants" 
              className="rounded-lg shadow-md h-48 object-cover w-full"
            />
            <img 
              src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop2.9e7f39e7.jpg&w=1080&q=75" 
              alt="Workshop participants" 
              className="rounded-lg shadow-md h-48 object-cover w-full"
            />
            <img 
              src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop3.8841a4a0.jpg&w=1080&q=75" 
              alt="Workshop participants" 
              className="rounded-lg shadow-md h-48 object-cover w-full"
            />
            <img 
              src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkshop1.64f5cf6f.jpg&w=1080&q=75" 
              alt="Workshop participants" 
              className="rounded-lg shadow-md h-48 object-cover w-full"
            />
          </div>
          
          <img 
            src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgroupworkshop.1a4a4bbd.jpg&w=1920&q=75" 
            alt="Group workshop" 
            className="rounded-lg shadow-xl w-full object-cover h-64 mb-16"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-bold mb-3">Bonuses worth ₹30,000/-</h3>
              <div className="bg-blue-900 text-white p-6 rounded-lg flex items-center gap-4 mb-6">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M14,18V16H7V18H14M17,14V12H7V14H17M17,10V8H12V10H17Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Free Lifetime Community Access</div>
                  <div className="text-sm text-blue-100">Connect, learn, and grow with peers and mentors</div>
                  <div className="text-xs mt-2 text-blue-200">Worth ₹3,000/-</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md animate-fade-in delay-100">
              <h3 className="text-xl font-bold mb-3">Hardware Toolkits</h3>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">Essential tools and components for building Bluetooth or UWB-based smart tracking devices.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md animate-fade-in delay-200">
              <h3 className="text-xl font-bold mb-3">Bonuses worth ₹30,000/-</h3>
              <div className="bg-blue-900 text-white p-6 rounded-lg flex items-center gap-4 mb-6">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M14,18V16H7V18H14M17,14V12H7V14H17M17,10V8H12V10H17Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Free Lifetime Community Access</div>
                  <div className="text-sm text-blue-100">Connect, learn, and grow with peers and mentors</div>
                  <div className="text-xs mt-2 text-blue-200">Worth ₹3,000/-</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md animate-fade-in delay-300">
              <h3 className="text-xl font-bold mb-3">Certify Your Learning</h3>
              <div className="bg-white p-6 rounded-lg flex items-center gap-4">
                <div>
                  <p className="text-gray-700">Earn a certificate by completing our 3-day DIY Smart Tracker Workshop and successfully building your own working device</p>
                </div>
                <div>
                  <img 
                    src="https://learn.nodetronics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcertificate.7fa97762.png&w=828&q=75" 
                    alt="Certificate" 
                    className="h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            FAQs: <span className="text-gray-700">Here's everything you may ask...</span>
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">Do I need any prior experience or technical knowledge?</h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 bg-blue-50">
                  <p>No prior experience is needed. This workshop is beginner-friendly and starts from the very basics.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in delay-100">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">What will I learn apart from building the tracker?</h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 bg-blue-50">
                  <p>Beyond building a tracker, you'll learn IoT fundamentals, microcontroller programming, Bluetooth communication, mobile app integration, and product development skills applicable to various smart device projects.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in delay-200">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">What is the duration of the workshop?</h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 bg-blue-50">
                  <p>The workshop runs for 3 consecutive days, with approximately 3 hours of live session each day. You'll also have access to additional resources and community support before and after the core workshop days.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in delay-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">Will I get support if I face issues during the project build?</h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 bg-blue-50">
                  <p>Absolutely! You'll have direct access to Yashwanth and the Nodetronics team via WhatsApp for technical support during the workshop and for 2 weeks after it concludes.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in delay-400">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">What equipment or materials do I need for the workshop?</h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 bg-blue-50">
                  <p>You'll need a computer with internet access. The hardware kit containing the ESP32 and all necessary components can be purchased separately or arranged by you if you already have access to these components. We'll provide a complete list upon registration.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in delay-500">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">Is there a refund if I am unable to attend?</h3>
                  <span className="group-open:rotate-180 transition-transform">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 bg-blue-50">
                  <p>Refunds are available up to 7 days before the workshop begins. If you can't attend the scheduled sessions, you'll still have access to the recordings and can follow along at your own pace.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">
              Don't Just Watch Tutorials — Build Something Real!
            </h2>
            <p className="text-xl animate-fade-in delay-100">
              Join our hands-on 3-day workshop and create a real, working smart tracker device from scratch. Get certified, get skilled, and get ahead!
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg py-6 px-12 rounded-full font-bold shadow-lg animate-pulse"
              onClick={handleEnrollNow}
              size="lg"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>
      
      <div className="sticky bottom-0 w-full bg-blue-900/90 backdrop-blur-sm py-4 border-t border-blue-800">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex items-center text-white mb-4 md:mb-0">
            <div>
              <div className="line-through text-sm">₹1,299/-</div>
              <div className="font-bold text-xl">₹499/-</div>
            </div>
            <div className="ml-4 bg-blue-800 px-2 py-1 rounded text-sm">
              60% OFF
            </div>
          </div>
          <div className="text-white">
            <div>Offer Ends in <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} Mins</span></div>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-100 w-full md:w-auto font-bold shadow-lg"
              onClick={handleEnrollNow}
              size="lg"
            >
              ENROLL NOW
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SmartTrackerWorkshop;
