
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, IndianRupee, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, processing, completed, failed
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [copied, setCopied] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const workshopId = searchParams.get('workshop');
  const amount = searchParams.get('amount') || '0';
  
  // Mock UPI ID and reference number
  const upiId = 'payment@nodetronics';
  const referenceNumber = 'NT' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

  const handleVerifyPayment = () => {
    setIsLoading(true);
    setPaymentStatus('processing');
    
    // Mock payment verification - in a real app, this would be an API call
    setTimeout(() => {
      setPaymentStatus('completed');
      setIsLoading(false);
      toast({
        title: "Payment Verified!",
        description: "Your registration is confirmed.",
        variant: "default"
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <Button 
            variant="outline" 
            className="mb-8" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Workshop
          </Button>
          
          <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Payment</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="p-6 shadow-md bg-white border-0">
                <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Workshop</p>
                    <p className="font-medium">
                      {workshopId === 'iot-weather-station' 
                        ? 'Build Your First IoT Weather Station' 
                        : 'Workshop Registration'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium">{referenceNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <div className="flex items-center text-2xl font-bold text-blue-600">
                      <IndianRupee className="w-5 h-5 mr-1" />
                      {amount}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <div className="flex items-center">
                      <span className="font-medium">UPI / BHIM</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="p-6 shadow-md bg-white border-0">
                {paymentStatus === 'pending' && (
                  <>
                    <div className="text-center mb-6">
                      <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <IndianRupee className="w-8 h-8 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold">Pay using UPI</h2>
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
                  </>
                )}
                
                {paymentStatus === 'processing' && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <h2 className="text-xl font-bold mb-2">Verifying Payment</h2>
                    <p className="text-gray-500">Please wait while we confirm your payment...</p>
                  </div>
                )}
                
                {paymentStatus === 'completed' && (
                  <div className="text-center py-8">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-xl font-bold text-green-600 mb-2">Payment Successful!</h2>
                    <p className="text-gray-500 mb-6">Your workshop registration is confirmed.</p>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700" 
                      onClick={() => navigate('/dashboard')}
                    >
                      Go to Dashboard
                    </Button>
                  </div>
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

export default Payment;
