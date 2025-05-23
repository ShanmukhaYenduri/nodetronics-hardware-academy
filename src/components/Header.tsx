
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Calendar, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/b46bf6d2-e853-4713-b065-d8cbd0c79408.png" 
              alt="Nodetronics Technology" 
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4 bg-white border shadow-xl rounded-xl">
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">🔌</div>
                    <div>
                      <div className="font-medium">IoT & Embedded</div>
                      <div className="text-sm text-gray-500">Arduino, Raspberry Pi, ESP32</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">🤖</div>
                    <div>
                      <div className="font-medium">Robotics</div>
                      <div className="text-sm text-gray-500">Autonomous systems & AI</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">🖨️</div>
                    <div>
                      <div className="font-medium">3D Printing</div>
                      <div className="text-sm text-gray-500">Design & Manufacturing</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="font-medium">CAD & PCB</div>
                      <div className="text-sm text-gray-500">Circuit design & CAD</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/workshops" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Workshops</span>
            </Link>

            <Link to="/blog" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white">
            <nav className="space-y-4">
              <Link 
                to="/courses" 
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/workshops" 
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Workshops
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Dashboard</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
