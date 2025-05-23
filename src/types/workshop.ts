
export interface Workshop {
  id: number | string;
  title: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  level: string;
  category: string;
  participants: number;
  maxParticipants: number;
  price: number;
  rating: number;
  image: string;
  description: string;
  prerequisites: string[];
  included: string[];
  outcomes: string[];
  status: string;
  url?: string;
  discountPrice?: number;
}

export interface PastWorkshop {
  id: number;
  title: string;
  instructor: string;
  date: string;
  duration: string;
  participants: number;
  rating: number;
  category: string;
  recordingAvailable: boolean;
  image: string;
}

export const filters = ['All', 'Upcoming', 'IoT', 'Robotics', '3D Printing', 'PCB Design'];

export const workshopsData: Workshop[] = [
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

export const pastWorkshopsData: PastWorkshop[] = [
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

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
