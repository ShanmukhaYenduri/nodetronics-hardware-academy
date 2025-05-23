
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmartTrackerPayment = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, processing, completed, failed
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [copied, setCopied] = useState(false);
  
  // Mock UPI ID and reference number
  const upiId = 'payment@nodetronics';
  const referenceNumber = 'NT' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  const amount = "499";
  const workshopDate = "June 13-15, 2025";
  
  // Get user details from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('workshopRegistration');
    if (storedData) {
      setUserDetails(JSON.parse(storedData));
    } else {
      // If no registration data exists, redirect to registration page
      navigate('/workshops/smart-tracker/register');
    }
  }, [navigate]);

  // Countdown timer for payment
  useEffect(() => {
    if (paymentStatus === 'pending') {
      const countdown = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
      
      return () => clearInterval(countdown);
    }
  }, [paymentStatus]);

  // Format timer display as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Copy UPI ID to clipboard
  const handleCopyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: "UPI ID Copied",
      description: `${upiId} has been copied to clipboard`,
      variant: "default"
    });
  };

  // Mock payment verification
  const handleVerifyPayment = () => {
    setIsLoading(true);
    setPaymentStatus('processing');
    
    // In a real app, this would be an API call to verify payment on the backend
    setTimeout(() => {
      setPaymentStatus('completed');
      setIsLoading(false);
      
      toast({
        title: "Payment Verified!",
        description: "Your workshop registration is confirmed.",
        variant: "default"
      });
      
      // Store payment completion status
      localStorage.setItem('workshopPaymentCompleted', 'true');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-8" 
            onClick={() => navigate('/workshops/smart-tracker/register')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registration
          </Button>
          
          <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Payment</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="border-0 shadow-md mb-8 animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Workshop Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Workshop</p>
                      <p className="font-medium">Build Your Own Smart Tracker — Like JioTag & AirTag</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Schedule</p>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{workshopDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        <span>3 days</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        <span>Limited seats</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md animate-fade-in delay-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Registration Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {userDetails && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{userDetails.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{userDetails.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{userDetails.phone}</p>
                      </div>
                      {userDetails.referralCode && (
                        <div>
                          <p className="text-sm text-gray-500">Referral Code</p>
                          <p className="font-medium">{userDetails.referralCode}</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border-0 shadow-md h-full animate-fade-in delay-200">
                {paymentStatus === 'pending' && (
                  <>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Payment Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V7M12 17V20M7 12H4M20 12H17M17.7 17.7L15.6 15.6M17.7 6.3L15.6 8.4M6.3 17.7L8.4 15.6M6.3 6.3L8.4 8.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="font-semibold text-xl">Pay ₹{amount}</p>
                        <p className="text-gray-500 text-sm mt-1">Time remaining: {formatTime(timer)}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">UPI ID</span>
                          <button 
                            onClick={handleCopyUpiId}
                            className="flex items-center text-blue-600 text-sm"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3 h-3 mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 mr-1" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <div className="font-medium text-lg">{upiId}</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-gray-500 mb-2">Reference Number</p>
                        <div className="font-medium">{referenceNumber}</div>
                        <p className="text-xs text-gray-500 mt-1">
                          Use this reference number when making the payment
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500 mb-2">Steps to Pay:</p>
                          <ol className="text-sm space-y-2 list-decimal list-inside">
                            <li>Open any UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                            <li>Select "Pay by UPI ID/VPA" option</li>
                            <li>Enter UPI ID: <span className="font-medium">{upiId}</span></li>
                            <li>Enter amount: <span className="font-medium">₹{amount}</span></li>
                            <li>Use reference: <span className="font-medium">{referenceNumber}</span></li>
                            <li>Complete payment in your UPI app</li>
                          </ol>
                        </div>
                        
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700" 
                          onClick={handleVerifyPayment}
                        >
                          I've Made the Payment
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}
                
                {paymentStatus === 'processing' && (
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-8"></div>
                    <h2 className="text-xl font-bold mb-2">Verifying Payment</h2>
                    <p className="text-gray-500">Please wait while we confirm your payment...</p>
                  </CardContent>
                )}
                
                {paymentStatus === 'completed' && (
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-6 text-center">
                      Your workshop registration is confirmed.<br />
                      You will receive confirmation details via email.
                    </p>
                    <div className="space-y-4 w-full">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700" 
                        onClick={() => navigate('/dashboard')}
                      >
                        Go to Dashboard
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full" 
                        onClick={() => navigate('/workshops')}
                      >
                        Browse More Workshops
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SmartTrackerPayment;
